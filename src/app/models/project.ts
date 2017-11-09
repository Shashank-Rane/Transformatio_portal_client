export class project{
    
    project_id: String
    project_percentage: Number
    project_nr: String
    project_name: String
    parent_project: String
    customer:String
    project_type: String
    project_status: String
    start_date: Date
    delivery_date:Date
    project_budget_hours:Number
    project_budget:String
    description:String
    project_executives:[String]
    project_manager: String
    project_it_head: String


    applications: [
        {
            application_id: Number
            average_application_percentage: Number
            
        }
    ]
    
    }