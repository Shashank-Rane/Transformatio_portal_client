import { Injectable } from '@angular/core';
import { ProjectApp } from '../models/app-model';
import { ExelSettingsModule } from '../modules/exel-settings/exel.settings2.module';

@Injectable()
export class MappingService {
mainApp:any[]=[]
  config: ExelSettingsModule = new ExelSettingsModule()
  constructor() { 
    
  }

  public convertToApp(exel): ProjectApp {
    
   var general_Array:any[]=[]
        let newApp: any = {
    
          ['application_id']: exel.application_id,
          //general_attributes

          ['general_attributes']: {
            name: exel.name,
            description: exel.description,
            lob: exel.lob,
            business_function: exel.business_function,
            owner: exel.owner,
            business_critically: exel.business_critically,
            application_age: exel.application_age,
            planned_decommission_date: exel.planned_decommission_date,
            functional_complexity: exel.functional_complexity,
            functional_fitment: exel.functional_fitment,
            operating_knowledge: exel.operating_knowledge,
            ui_type: exel.ui_type,
            country_of_usage: exel.country_of_usage,
            languages_supported: exel.name,
            user_type: exel.user_type,
            no_of_users: exel.no_of_users,
            expected_user_growth: exel.expected_user_growth,
            usability_index: exel.usability_index,
            application_documentation: exel.application_documentation,
            os: exel.os,
            deployment_type: exel.deployment_type,
            production_release_frequency_per_year: exel.production_release_frequency_per_year,
            vendor_dependency: exel.vendor_dependency,
          },
    
          //integration_attributes:
    
          ['integration_attributes']: {
            no_of_integrations: exel.no_of_integrations,
            no_of_point_to_point_Integrations: exel.no_of_point_to_point_Integrations,
            no_of_middleware_based_Integartions: exel.no_of_middleware_based_Integartions,
            no_of_api_per_services_exposed: exel.no_of_api_per_services_exposed,
            percent_of_functionality_avaiable_as_api: exel.percent_of_functionality_avaiable_as_api,
            affinity_score: exel.affinity_score
          },
    
          //ticket_attributes:
    
          ['ticket_attributes']: {
            ticket_attributes: exel.ticket_attributes,
            total_no_of_tickets: exel.total_no_of_tickets,
            no_of_crs: exel.no_of_crs,
            no_of_bug_fixes: exel.no_of_bug_fixes,
          },
    
          //application_type:
    
          //custom_applications_attributes :{   
    
          ['application_type']: {
            custom_applications_attributes: {
    
              custom_selected: exel.custom_selected,
              ui_dev_language: exel.ui_dev_language,
              ui_library_framework_with_version: exel.ui_library_framework_with_version,
              application_layer_dev_language: exel.application_layer_dev_language,
              application_layer_library_framework_with_version: exel.application_layer_library_framework_with_version,
              application_layer_products_with_version: exel.application_layer_products_with_version,
              middleware_with_version: exel.middleware_with_version,
              storage_type: exel.storage_type,
              storage_product_and_version: exel.storage_product_and_version,
              persistence_database_framework_with_version: exel.persistence_database_framework_with_version,
              scm_tool: exel.scm_tool
    
            },
            // package_attributes:{
    
            package_attributes: {
    
              package_selected: exel.package_selected,
              package_name: exel.package_name,
              package: exel.package,
              package_description: exel.package_description,
              vendor: exel.vendor
    
    
            }
          },
          // classification_attributes: 
    
          ['classification_attributes']: {
            pace_layer_category: exel.pace_layer_category,
            four_rs: exel.four_rs
          },
    
    
          //scores:{
    
    
          ['scores']: {
    
            // optimize_scores
    
            optimize_scores: {
    
              os_stability: exel.os_stability,
              os_maturity: exel.os_maturity,
              os_availibility_score: exel.os_availibility_score,
              os_scalability_score: exel.os_scalability_score,
              os_cloud_applicabilty_score: exel.os_cloud_applicabilty_score,
              os_current_cloud_score: exel.os_current_cloud_score,
              os_redundency_score: exel.os_redundency_score,
              os_license_optimization_score: exel.os_license_optimization_score,
              os_consolidation_score: exel.os_consolidation_score,
              os_technical_debt_score: exel.os_technical_debt_score
            },
    
            // digitalize_scores
            digitalize_scores: {
    
              ds_straight_through_processing_adoption_score: exel.nads_straight_through_processing_adoption_score,
              ds_api_applicability_score: exel.ds_api_applicability_score,
              ds_current_api_adoption_score: exel.ds_current_api_adoption_score,
              ds_technology_obsolecence: exel.ds_technology_obsolecence,
              ds_mobility_enablement_scope: exel.ds_mobility_enablement_scope,
              ds_current_mobility_adoption_level: exel.ds_current_mobility_adoption_level,
              ds_self_service_adoption: exel.ds_self_service_adoption
            },
    
            // expedite_scores
    
            expedite_scores: {
    
    
              es_testing_automation_adoption: exel.es_testing_automation_adoption,
              es_devops_applicability_score: exel.es_devops_applicability_score,
              es_current_dev_ops_adoption_score: exel.es_current_dev_ops_adoption_score
    
            },
            // monetize_scores
            monetize_scores: {
    
              ms_unique_functionality: exel.ms_unique_functionality,
              ms_monetization_model: exel.ms_monetization_model,
              ms_registered_as_ip: exel.ms_registered_as_ip,
              ms_current_roi_realization_model: exel.ms_current_roi_realization_model,
              ms_market_potential: exel.ms_market_potential,
              ms_ease_of_monetization: exel.ms_ease_of_monetization
            },
    
            // innovation_scores
            innovation_scores: {
              is_ai_or_ml_applicability: exel.is_ai_or_ml_applicability,
              is_chat_bot_applicability: exel.is_chat_bot_applicability,
              is_rpa_applicability_score: exel.is_rpa_applicability_score,
              is_block_chain_applicability_score: exel.is_block_chain_applicability_score
            },
    
            // others
            others: {
    
              lti_owner: exel.lti_owner,
              redundant_application_name: exel.redundant_application_name,
              impact_of_downtime: exel.impact_of_downtime,
              tco_score: exel.tco_score,
              devlopement_methodology: exel.devlopement_methodology
            }
          }
    
    
    
    
    
    
        }
    
        return newApp;
    
      }


      public convertToExel(app:any[]){
        this.mainApp=app
        //console.log( 'this.mainApp',this.mainApp[0])
                // let exelApps:any[]=app[0].applications ;console.log("data0", app[0])
                var i=0,k=0, data:object={},trial:object={},trialArr:object[]=[], data3:object,dataGeneral:object={},dataTrialArr:object[]=[],dataInt:object={}


                // let obj1=[{['gen']:[{a:'name',b:'2'},{a:'owner',b:'3'},{a:'keylogger',b:'4'}]},{['gen']:[{a:'name',b:'55'},{a:'owner',b:'111'},{a:'keylogger',b:'333'}]}]
                // var obj3:object={};
                // for(let x in obj1){
                //   i++;
                //     for(let y of obj1[x].gen){
                //       let j=0;
                      
                //       let obj3={
                //         [y.a]:y.b
                //       }
                //       //console.log("obj31",obj3);
                //       //obj3=Object.assign(trial,obj3);console.log("obj313",obj3);
                //       Object.assign(trial,obj3)
                //       console.log("j",j++)
                //       //console.log("trial111",trial)
                //     }
                //     trialArr.push(trial)
                //     trial={}
                //    console.log("i",i,trialArr)


                // }
              
               // console.log("trial",trial1);
              for(let j of this.mainApp[0].applications ){

                for(let i of j.attributes ){
                  
                  let data3={
                  [i.key]:i.value
                  }
                  Object.assign(dataGeneral,data3)
                  //console.log("dataGeneral",dataGeneral)
                 
                }
                
            
                dataTrialArr.push(dataGeneral);
                dataGeneral={}
               
              } //console.log("dataTrialArr",dataTrialArr)
              
             return dataTrialArr 
            }


      
                convertToMap(ex){
                  //var inputMapper:InputMap
                    let formObj={"Hekko":"Raj","firstName":"Kap","emailAddress":"raj@d","client":"Oracle","start_date":"sss"}
  
  
                    var inputMapps: InputMap[] = Object.getOwnPropertyNames(ex)
                    .map((key: string) => new InputMap(key, ex[key],  ex[key],'general'));
                    return inputMapps;
                }

              getLabel(key){
                
                return this.mainApp[0].attributesMaster[key].label
              }
  
             
  }
  class InputMap{
    constructor(
        public key1:string,
        public label:string,
        public value:string,
        public category_type:string
    ) {}
  }
                   // data={
                  //general
                  

                //    [this.config.attribute_details[x].general_attributes[0].title] :this.config.attribute_details[x].general_attributes[0].value,
                //   [this.config.attribute_details[x].general_attributes[1].title]: this.config.attribute_details[x].general_attributes[1].value,
                // [this.config.attribute_details[x].general_attributes[2].title] :this.config.attribute_details[x].general_attributes[2].value,
                // [this.config.attribute_details[x].general_attributes[3].title] :this.config.attribute_details[x].general_attributes[3].value,
                
                
                  // ['owner']:apps[0].applications[x].general_attributes.owner,
                  // ['business_critically'] :apps[0].applications[x].general_attributes.business_critically,
                  // ['application_age'] :apps[0].applications[x].general_attributes.application_age,
                  // ['planned_decommission_date'] :apps[0].applications[x].general_attributes.planned_decommission_date,
                  // ['functional_complexity']:apps[0].applications[x].general_attributes.functional_complexity,
                  // ['functional_fitment'] :apps[0].applications[x].general_attributes.functional_fitment,
                  // ['operating_knowledge'] :apps[0].applications[x].general_attributes.operating_knowledge,
                  // ['ui_type'] :apps[0].applications[x].general_attributes.ui_type,
                  // ['country_of_usage'] :apps[0].applications[x].general_attributes.country_of_usage,
                  // ['languages_supported'] :apps[0].applications[x].general_attributes.languages_supported,
                  // ['user_type'] :apps[0].applications[x].general_attributes.user_type,
                  // ['no_of_users'] :apps[0].applications[x].general_attributes.no_of_users,
                  // ['expected_user_growth']:apps[0].applications[x].general_attributes.expected_user_growth,
                  // ['usability_index'] :apps[0].applications[x].general_attributes.usability_index,
                  // ['application_documentation'] :apps[0].applications[x].general_attributes.application_documentation,
                //   ['os'] : eachApp.general_attributes.os,
                //   ['deployment_type'] :eachApp.general_attributes.deployment_type,
                //   ['production_release_frequency_per_year'] :eachApp.general_attributes.production_release_frequency_per_year,
                //   ['vendor_dependency']: eachApp.general_attributes.vendor_dependency,
        
                // //   //integrations
                //   ['no_of_integrations']:eachApp.integration_attributes.no_of_integrations,
                //   ['no_of_point_to_point_Integrations']:eachApp.integration_attributes.no_of_point_to_point_Integrations,
                //   ['no_of_middleware_based_Integartions']:eachApp.integration_attributes.no_of_middleware_based_Integartions,
                //   ['no_of_api_per_services_exposed']:eachApp.integration_attributes.no_of_api_per_services_exposed,
                //   ['percent_of_functionality_avaiable_as_api']:eachApp.integration_attributes.percent_of_functionality_avaiable_as_api,
                //   ['affinity_score']:eachApp.integration_attributes.affinity_score,
        
                // //   //ticket attr
                //   ['ticket_attributes']:eachApp.ticket_attributes.ticket_attributes,
                //   ['total_no_of_tickets']:eachApp.ticket_attributes.total_no_of_tickets,
                //   ['no_of_crs']:eachApp.ticket_attributes.no_of_crs,
                //   ['no_of_bug_fixes']:eachApp.ticket_attributes.no_of_bug_fixes,
          
                // //    //custom attr
                //  // ['custom_selected']:eachApp.application_type.custom_applications_attributes.custom_selected,
                
                //   ['ui_dev_language']:eachApp.application_type.custom_applications_attributes.ui_dev_language,
                //   ['ui_library_framework_with_version']:eachApp.application_type.custom_applications_attributes.ui_library_framework_with_version,
                //   ['application_layer_dev_language']:eachApp.application_type.custom_applications_attributes.application_layer_dev_language,
                //   ['application_layer_library_framework_with_version']:eachApp.application_type.custom_applications_attributes.application_layer_library_framework_with_version,
                //   ['application_layer_products_with_version']:eachApp.application_type.custom_applications_attributes.application_layer_products_with_version,
                //   ['middleware_with_version']:eachApp.application_type.custom_applications_attributes.middleware_with_version,
                //   ['storage_type']:eachApp.application_type.custom_applications_attributes.storage_type,
                //   ['storage_product_and_version']:eachApp.application_type.custom_applications_attributes.storage_product_and_version,
                //   ['persistence_database_framework_with_version']: eachApp.application_type.custom_applications_attributes.persistence_database_framework_with_version,
                //   ['scm_tool']:eachApp.application_type.custom_applications_attributes.scm_tool,
          
                  
                // //   //package attr
                //  //['package_selected']:eachApp.application_type.package_attributes.package_selected,
                //   ['package_name']:eachApp.application_type.package_attributes.package_name,
                //   ['package']:eachApp.application_type.package_attributes.package,
                //   ['package_description']:eachApp.application_type.package_attributes.package_description,
                //   ['vendor']:eachApp.application_type.package_attributes.vendor,
                 
          
                // //  //classification attributes
                //   ['pace_layer_category']:eachApp.classification_attributes.pace_layer_category,
                //   ['four_rs']:eachApp.classification_attributes.four_rs,
                  
          
                // //   //optimise scores
          
                //   ['os_stability']:eachApp.scores.optimize_scores.os_stability,
                //   ['os_maturity']:eachApp.scores.optimize_scores.os_maturity,
                //   ['os_availibility_score']:eachApp.scores.optimize_scores.os_availibility_score,
                //   ['os_scalability_score']:eachApp.scores.optimize_scores.os_scalability_score,
                //   ['os_cloud_applicabilty_score']:eachApp.scores.optimize_scores.os_cloud_applicabilty_score,
                //   ['os_current_cloud_score']:eachApp.scores.optimize_scores.os_current_cloud_score,
                //   ['os_redundency_score']: eachApp.scores.optimize_scores.os_redundency_score,
                //   ['os_license_optimization_score']:eachApp.scores.optimize_scores.os_license_optimization_score,
                //   ['os_consolidation_score']:eachApp.scores.optimize_scores.os_consolidation_score,
                //   ['os_technical_debt_score']:eachApp.scores.optimize_scores.os_technical_debt_score,
            
          
                // // //    //digitalise scores
                //  ['ds_straight_through_processing_adoption_score']:eachApp.scores.digitalize_scores.ds_straight_through_processing_adoption_score,
                //   ['ds_current_api_adoption_score']:eachApp.scores.digitalize_scores.ds_current_api_adoption_score,
                //   ['ds_technology_obsolecence']:eachApp.scores.digitalize_scores.ds_technology_obsolecence,
                //   ['ds_mobility_enablement_scope']:eachApp.scores.digitalize_scores.ds_mobility_enablement_scope,
                //   ['ds_current_mobility_adoption_level']: eachApp.scores.digitalize_scores.ds_current_mobility_adoption_level,
                //   ['ds_self_service_adoption']:eachApp.scores.digitalize_scores.ds_self_service_adoption,
                //   ['ds_api_applicability_score']:eachApp.scores.digitalize_scores.ds_api_applicability_score,

              
          
                // // // //expedite scores
                //   ['es_testing_automation_adoption']:eachApp.scores.expedite_scores.es_testing_automation_adoption,
                //   ['es_devops_applicability_score']:eachApp.scores.expedite_scores.es_devops_applicability_score,
                //   ['es_current_dev_ops_adoption_score']:eachApp.scores.expedite_scores.es_current_dev_ops_adoption_score,
          
                // // //    //monetisation scores
                //   ['ms_unique_functionality']:eachApp.scores.monetize_scores. ms_unique_functionality,
                //   ['ms_registered_as_ip']:eachApp.scores.monetize_scores. ms_registered_as_ip,
                //   ['ms_current_roi_realization_model']:eachApp.scores.monetize_scores. ms_current_roi_realization_model,
                //   ['ms_market_potential']:eachApp.scores.monetize_scores. ms_market_potential,
                //   ['ms_ease_of_monetization']:eachApp.scores.monetize_scores. ms_ease_of_monetization,
                //   ['ms_monetization_model']:eachApp.scores.monetize_scores. ms_monetization_model,
          
                // // // //   //innovation scores
                //   ['is_ai_or_ml_applicability']:eachApp.scores.innovation_scores.is_ai_or_ml_applicability,
                //   ['is_chat_bot_applicability']:eachApp.scores.innovation_scores.is_chat_bot_applicability,
                //   ['is_rpa_applicability_score']:eachApp.scores.innovation_scores.is_rpa_applicability_score,
                //   ['is_block_chain_applicability_score']:eachApp.scores.innovation_scores.is_block_chain_applicability_score,
          
                // // // //   //others scores
                //   ['lti_owner']:eachApp.scores.others.lti_owner,
                //   ['redundant_application_name']:eachApp.scores.others.redundant_application_name, 
                //   ['impact_of_downtime']:eachApp.scores.others.impact_of_downtime,
                //   ['tco_score']:eachApp.scores.others.tco_score,
                //   ['devlopement_methodology']:eachApp.scores.others.devlopement_methodology
          
               
