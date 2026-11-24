import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceName1 = {
  ApiGateway: "API_GATEWAY",
  ApplicationElb: "APPLICATION_ELB",
  AutoScalingGroup: "AUTO_SCALING_GROUP",
  CloudFront: "CLOUD_FRONT",
  DynamoDb: "DYNAMO_DB",
  Ec2: "EC2",
  Ecs: "ECS",
  Eks: "EKS",
  ElasticBeanstalk: "ELASTIC_BEANSTALK",
  ElastiCache: "ELASTI_CACHE",
  Elb: "ELB",
  Es: "ES",
  Kinesis: "KINESIS",
  Lambda: "LAMBDA",
  NatGateway: "NAT_GATEWAY",
  NetworkElb: "NETWORK_ELB",
  Rds: "RDS",
  Redshift: "REDSHIFT",
  Route53: "ROUTE_53",
  S3: "S3",
  SageMaker: "SAGE_MAKER",
  Sns: "SNS",
  Sqs: "SQS",
  StepFunctions: "STEP_FUNCTIONS",
  Swf: "SWF",
} as const;
export type ServiceName1 = (typeof ServiceName1)[keyof typeof ServiceName1] | (string & {});

export const serviceName1Schema: EnumSchema<ServiceName1> = s.enumOf<ServiceName1>(ServiceName1);
