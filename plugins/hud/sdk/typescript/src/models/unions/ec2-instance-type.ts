import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Ec2InstanceType = string;

export const ec2InstanceTypeSchema: Schema<Ec2InstanceType> = s.of<Ec2InstanceType>(s.union([s.string()]));
