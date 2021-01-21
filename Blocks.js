class Block{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("Block1.png")
		this.body=Bodies.circle(this.x, this.y, this.r-50, options)
		World.add(world, this.body);
	}

	display()
	{
		var blockPos=this.body.position;	
		push()
		translate(blockPos.x, blockPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		pop()
 }
}