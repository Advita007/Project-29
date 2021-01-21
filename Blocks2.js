class Block2{
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
		this.image=loadImage("Block2.png")
		this.body=Bodies.circle(this.x, this.y, this.r-50, options)
		World.add(world, this.body);
	}

	display()
	{
		var block2Pos=this.body.position;	
		push()
		translate(block2Pos.x, block2Pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		pop()
 }
}