import { Injectable } from "@angular/core";
import { attributes } from "../models/attribute";
import { fields } from "../models/fields";

@Injectable()

export class DataService {
    fields=[
//GENERAL ATTRIBUTES
        new fields(1, 1, 'name','' ),
        new fields(2, 1, 'description ','' ),
        new fields(3, 1, 'lob ','' ),
        new fields(4, 1, 'business_function ','' ),
        new fields(5, 1, 'owner','' ),
        new fields(6, 1, 'business_critically ',['Not Critical','Critical'] ),
        new fields(7, 1, 'application_age','' ),
        new fields(8, 1, 'planned_decommission_date_month_Year','' ),
        new fields(9, 1, 'functional_complexity',['Not at all user friendly','less user friendly','extremly user friendly']),
        new fields(10, 1, 'functional_fitment',['Well Aligned','Minor fuctional upgrdes','Misfit'] ),
        new fields(11, 1, 'operating_knowledge','' ),
        new fields(12, 1, 'ui_type',['BrowserBased(B)','Mobile App(M)','All(A)','B+M','B+D','M+D'] ),
        new fields(13, 1, 'country_of_usage',['GBR','USA',]),
        new fields(14, 1, 'languages_supported','' ),
        new fields(15, 1, 'user_type',['Business User','End Customer'] ),
        new fields(16, 1, 'no_of_users',[1]),
        new fields(17, 1, 'expected_user_growth','' ),
        new fields(18, 1, 'usability_index',['Not at all user friendly','less user friendly','extremly user friendly'] ),
        new fields(19, 1, 'application_documentation','' ),
        new fields(20, 1, 'os',['Linux','Windows']),
        new fields(21, 1, 'deployment_type',['On-premise','Public cloud','PaaS','Client Server'] ),
        new fields(22, 1, 'production_release_frequency_per_year','' ),
        new fields(23, 1, 'vendor_dependency',['high','medium','low'] ),
        new fields(24, 1, 'general_attributes_completion_percentage',['high','medium','low'] ),

// INTEGRATION ATTRIBUTES

        new fields(25, 2, 'no_of_integrations','' ),
        new fields(26, 2, 'no_of_point_to_point_Integrations','' ),
        new fields(27, 2, 'no_of_middleware_based_Integrations','' ),
        new fields(28, 2, ' no_of_api_per_services_exposed','' ),
        new fields(29, 2, 'percent_of_functionality_avaiable_as_api','' ),
        new fields(30, 2, 'affinity_score','' ),
        new fields(31, 2, 'integration_attributes_completion_percentage','' ),

//TICKET ATTRIBUTES

        new fields(32, 3, 'total_no_of_tickets',[2] ),
        new fields(33, 3, 'no_of_crs',[4]),
        new fields(34, 3, 'no_of_bug_fixes',[5]),
        new fields(35, 3, 'ticket_attributes_completion_percentage','' ),

//CUSTOM BUILT
        new fields(36, 4, 'custom_built',''),
        new fields(37, 4, 'packaged_or_cots',''),
        new fields(38, 5, 'ui_dev_language',['Javascript','VBscript']),
        new fields(39, 5, 'ui_library_framework_with_version',['ExtJS','Angular JS','React']),
        new fields(40, 5, 'application_layer_dev_language',['Java','C#','VB.Net']),
        new fields(41, 5, 'application_layer_library_framework_with_version',['Spring 4.0','Net 3.0','J2ee 6','BPM']),
        new fields(42, 5, 'application_layer_products_with_version',['Tomcat','WebLogic','Websphere','Glassfish','Jboss']),
        new fields(43, 5, 'middleware_with_version',['Mule ESB 2.0','Fusion Middleware 12c']),
        new fields(44, 5, 'storage_type',['RDBMS','NoSQL','Filesystem']),
        new fields(45, 5, 'storage_product_and_version',['Oracle 12c','MongoDB X.X','MySQL']),
        new fields(46, 5, 'persistence_database_framework_with_version',['Hibernate 3.0','Toplink X.x','JDBC','ODBC','ADO .NET']),
        new fields(47, 5, 'scm_tool',['GIT','SVN','VSS']),
        new fields(48, 5, 'custom_built_completon_percentage',''),

//
        new fields(49, 6, 'pace_layer_category',''),
        new fields(50, 6, 'four_r_s',''),
//OPTIMIZE SCORES
        new fields(51, 7, 'os_stability',['1-very unstable','2-unstable','3-Stable','4-very stable']),
        new fields(52, 7, 'os_maturity',['1-many Cr s','2-Moderate Cr s','3- Few Cr s','4- no Cr s']),
        new fields(53, 7, 'os_availability_score',['1-high no. of down time incidents,2-Not meeting expected Avaiability SLA','3-Moderate no of downtime incidents, not meeting the expected SLA','4-Few no of downtime incidents, not meeting the expected SLA']),
        new fields(54, 7, 'os_scalability_score',['1-If scalabilty SLA not met','2-High no of saclabilityy SLAs not met','3-Moderate no of saclabilityy SLAs not met','4-Few no of saclabilityy SLAs not met','5 - If scalabilty SLA met with future demands met']),
        new fields(55, 7, 'os_cloud_applicabilty_score',['1-No Scope for cloud Migration','2-less scope for cloud Migration','3- Moderate scope for cloud migration']),
        new fields(56, 7, 'os_current_cloud_score',['0-Move to Cloud (IaaS, SaaS)','1-No scope to move to cloud','2-Move to Cloud as IaaS']),
        new fields(57, 7, 'os_redundancy_score',['1 - No redundency','2- Atleast one other redundant Application present','3 - 2 other redundant Applications present']),
        new fields(58, 7, 'os_license_optimization_score',['1- Many unused licences','2- less unused licences','3-lesslicence usage','4- Moderate licence usage','5- optimum licence usage']),
        new fields(59, 7, 'os_consolidation_score',['1- Cannot propose Consolidation','2- can propose consolidation','3- less probability of consolidation','4- Moderate probability of consolidation','5-High probability of Consolidation (Due to redundency)']),
        new fields(60, 7, 'os_technical_debt_score',['1 - No technical debt','2- less technical debt','3- Moderate technical debt','4 - very high Technical debt']),
        new fields(60, 7, 'os_completion_percentage',''),

//DIZITALIZE SCORES
        new fields(49, 8, 'ds_straight_through processing_adoption_score',['1-Low','2-Medium','3-High']),
        new fields(50, 8, 'ds_api_applicability_score',['1 - No scope to create APIs in the application','2- Scope to create','3- Moderate scope of APIs','4 - Very High scope of APIs (May be Due to high no. of inbound integrations)']),
        new fields(50, 8, 'ds_current_api_adoption_score',['1 - No APIs','2- Few APIs','3-many APIs','4 - Almost entire functionality avaiable as API']),
        new fields(50, 8, 'ds_technology_obsolecence',['1-Latest technology','2- Current technology','3- near to obsoletion ','4-Obsolete and needs immediate replacement']),
        new fields(50, 8, 'ds_mobility_enablement_scope',['1 - No scope or need for Mobile Enablement','2- Scope for mobile enablement','3- Moderate scope for mobile enablement','4-Very high scope for Mobile enablement']),
        new fields(50, 8, 'ds_current_mobility_adoption_level ',['1-Basic','2-Moderate','3-Complete']),
        new fields(50, 8, 'ds_self_service_adoption',['1-Basic','2-Moderate','3-Complete']),
        new fields(50, 8, 'ds_completion_percentage',''),
      
//EXPEDITE SCORES
        new fields(50, 9, 'es_testing_automation_adoption',['1-Basic','2-Moderate','3-Complete']),
        new fields(50, 9, 'es_devOps_applicability_score',['1- no scope for Devops initiative','2- scope for devops initiative','3- Moderate scope for devops initiative','4- high scope for devops initiative']),
        new fields(50, 9, 'es_current_dev_ops_adoption_score',['1- No Devops adoption','2- less devops adoption','3- moderate devops adoption']),
        new fields(50, 9, 'es_completion_percentage',''),
 
//MONETIZE SCORES
        new fields(50, 10, 'ms_unique_functionality',['1-yes','2-no']),
        new fields(50, 10, 'ms_registered_as_ip',['1-yes','2-no']),
        new fields(50, 10, 'ms_current_roi_realization_model',['0-None','1-Diffrentiator','2-VaS','3-Independent Service']),
        new fields(50, 10, 'ms_market_potential',['low','medium','high']),
        new fields(50, 10, 'ms_ease_of_monetization',['With Minor Changes','With Refactoring','With Re-Engineering']),
        new fields(50, 10, 'ms_monetization_model',['API','SaaS']),
        new fields(50, 10, 'ms_completion_percentage',''),

//INNOVATION SCORES
        new fields(50, 11, 'is_ai_or_ml_applicability',''),
        new fields(50, 11, 'is_chat_bot_applicability',''),
        new fields(50, 11, 'is_rpa_applicability_score',''),
        new fields(50, 11, 'is_block_chain_applicability_score',''),
        new fields(50, 11, 'is_completion_percentage',''),

//OTHERS
        new fields(50, 12, 'ot_lti_owner',''),
        new fields(50, 12, 'ot_redundant_application_name',''),
        new fields(50, 12, 'ot_impact_of_downtime',''),
        new fields(50, 12, 'ot_tco_score',''),
        new fields(50, 12, 'ot_devlopement_methodology',''),
        new fields(50, 12, 'ot_completion_percentage',''),

      ];
  getAttributes() {
    return [
     new attributes(1, 'general_attributes' ),
     new attributes(2, 'integration_attributes' ),  
     new attributes(3, 'ticket_attributes' ),
     new attributes(4, 'application_type' ),
     new attributes(5, 'custom_applications_attributes' ),
     new attributes(6, 'classification_attributes' ),
     new attributes(7, 'optimize_scores' ),
     new attributes(8, 'digitalize_scores' ),
     new attributes(9, 'expedite_scores' ),
     new attributes(10, 'monetize_scores' ),
     new attributes(11, 'innovation_scores' ),
     new attributes(12, 'other' ),
    ];
  }
  
  getFields() {
   return this.fields
  }


}
