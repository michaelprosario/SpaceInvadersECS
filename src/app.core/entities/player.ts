import {Entity} from "ecs-lib";
import { Sprite2D, Sprite2DComponent } from "../components/sprite-2d";

export default class Player extends Entity {

    constructor(spriteData: Sprite2D) {
        super();

        this.add(new Sprite2DComponent(spriteData));
    }
}