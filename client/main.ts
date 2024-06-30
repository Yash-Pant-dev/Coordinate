/* 
	Client tasks:
	Load cfg - Specs + Which user to accept (server ip is fixed)
	Inform about prematurely canceled run and data present
	(p2 - ask where to transmit this)
	Get info about a new task (Run if queue empty) - 
	{
		id:
		user:
		pipeline: adj list(id of stages)
		stages: <id, work to be done>
		device-distribution: <id of stage, list of devi>
		
	}
*/