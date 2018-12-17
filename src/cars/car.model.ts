import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel({
    description: 'Car description',
    name: 'Car',
})
export class CarModel {
    @ApiModelProperty({
        description: 'Id of car',
        example: ['123456789', '12345'],
        required: true,
    })
    public id: string;

    @ApiModelProperty({
        description: '',
        required: true,
    })
    public name: string;

    @ApiModelProperty({
        description: 'Description of car',
        required: true,
    })
    public description: string;
}
