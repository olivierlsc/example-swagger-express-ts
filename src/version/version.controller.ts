import * as express from "express";
import {injectable} from "inversify";
import {controller, httpGet, interfaces} from "inversify-express-utils";
import {ApiPath, ApiOperationGet, SwaggerDefinitionConstant} from "swagger-express-ts";

@ApiPath( {
    path : "/versions" ,
    name : "Version"
} )
@controller( "/versions" )
@injectable()
export class VersionController implements interfaces.Controller {
    public static TARGET_NAME : string = "VersionController";
    private versions : any[] = [
        {
            id : "1" ,
            name : "Version 1" ,
            description : "Description Version 1" ,
            version : "1.0.0"
        } ,
        {
            id : "2" ,
            name : "Version 2" ,
            description : "Description Version 2" ,
            version : "2.0.0"
        }
    ];

    @ApiOperationGet( {
        description : "Get versions objects list" ,
        summary : "Get versions list" ,
        responses : {
            200 : {
                description : "Success" ,
                type : SwaggerDefinitionConstant.Model.Property.Type.ARRAY ,
                model : "Version"
            }
        } ,
    } )
    @httpGet( "/" )
    public get ( request : express.Request , response : express.Response , next : express.NextFunction ) : void {
        response.json( this.versions );
    }
}
