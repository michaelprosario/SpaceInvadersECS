import {Component} from "ecs-lib";

export type Point2D = {
    x: number;
    y: number;
}

export type Size2D = {
    width: number;
    height: number;
}

export type Sprite2D = {
    size: Size2D;
    location: Point2D;
}

export const Sprite2DComponent = Component.register<Sprite2D>();