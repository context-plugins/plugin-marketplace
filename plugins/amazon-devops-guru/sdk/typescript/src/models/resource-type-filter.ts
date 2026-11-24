import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceTypeFilter = {
  LogGroups: "LOG_GROUPS",
  CloudfrontDistribution: "CLOUDFRONT_DISTRIBUTION",
  DynamodbTable: "DYNAMODB_TABLE",
  Ec2NatGateway: "EC2_NAT_GATEWAY",
  EcsCluster: "ECS_CLUSTER",
  EcsService: "ECS_SERVICE",
  EksCluster: "EKS_CLUSTER",
  ElasticBeanstalkEnvironment: "ELASTIC_BEANSTALK_ENVIRONMENT",
  ElasticLoadBalancerLoadBalancer: "ELASTIC_LOAD_BALANCER_LOAD_BALANCER",
  ElasticLoadBalancingV2LoadBalancer: "ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER",
  ElasticLoadBalancingV2TargetGroup: "ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP",
  ElasticacheCacheCluster: "ELASTICACHE_CACHE_CLUSTER",
  ElasticsearchDomain: "ELASTICSEARCH_DOMAIN",
  KinesisStream: "KINESIS_STREAM",
  LambdaFunction: "LAMBDA_FUNCTION",
  OpenSearchServiceDomain: "OPEN_SEARCH_SERVICE_DOMAIN",
  RdsDbInstance: "RDS_DB_INSTANCE",
  RdsDbCluster: "RDS_DB_CLUSTER",
  RedshiftCluster: "REDSHIFT_CLUSTER",
  Route53HostedZone: "ROUTE53_HOSTED_ZONE",
  Route53HealthCheck: "ROUTE53_HEALTH_CHECK",
  S3Bucket: "S3_BUCKET",
  SagemakerEndpoint: "SAGEMAKER_ENDPOINT",
  SnsTopic: "SNS_TOPIC",
  SqsQueue: "SQS_QUEUE",
  StepFunctionsActivity: "STEP_FUNCTIONS_ACTIVITY",
  StepFunctionsStateMachine: "STEP_FUNCTIONS_STATE_MACHINE",
} as const;
export type ResourceTypeFilter = (typeof ResourceTypeFilter)[keyof typeof ResourceTypeFilter] | (string & {});

export const resourceTypeFilterSchema: EnumSchema<ResourceTypeFilter> =
  s.enumOf<ResourceTypeFilter>(ResourceTypeFilter);
