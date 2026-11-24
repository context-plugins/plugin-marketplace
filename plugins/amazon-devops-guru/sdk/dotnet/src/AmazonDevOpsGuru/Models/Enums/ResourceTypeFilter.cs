using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceTypeFilter>))]
public sealed record ResourceTypeFilter : OpenStringEnum<ResourceTypeFilter>
{
    private ResourceTypeFilter(string value) : base(value)
    {
    }

    public static readonly ResourceTypeFilter LogGroups = new("LOG_GROUPS");

    public static readonly ResourceTypeFilter CloudfrontDistribution = new("CLOUDFRONT_DISTRIBUTION");

    public static readonly ResourceTypeFilter DynamodbTable = new("DYNAMODB_TABLE");

    public static readonly ResourceTypeFilter Ec2NatGateway = new("EC2_NAT_GATEWAY");

    public static readonly ResourceTypeFilter EcsCluster = new("ECS_CLUSTER");

    public static readonly ResourceTypeFilter EcsService = new("ECS_SERVICE");

    public static readonly ResourceTypeFilter EksCluster = new("EKS_CLUSTER");

    public static readonly ResourceTypeFilter ElasticBeanstalkEnvironment = new("ELASTIC_BEANSTALK_ENVIRONMENT");

    public static readonly ResourceTypeFilter ElasticLoadBalancerLoadBalancer = new(
        "ELASTIC_LOAD_BALANCER_LOAD_BALANCER");

    public static readonly ResourceTypeFilter ElasticLoadBalancingV2LoadBalancer = new(
        "ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER");

    public static readonly ResourceTypeFilter ElasticLoadBalancingV2TargetGroup = new(
        "ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP");

    public static readonly ResourceTypeFilter ElasticacheCacheCluster = new("ELASTICACHE_CACHE_CLUSTER");

    public static readonly ResourceTypeFilter ElasticsearchDomain = new("ELASTICSEARCH_DOMAIN");

    public static readonly ResourceTypeFilter KinesisStream = new("KINESIS_STREAM");

    public static readonly ResourceTypeFilter LambdaFunction = new("LAMBDA_FUNCTION");

    public static readonly ResourceTypeFilter OpenSearchServiceDomain = new("OPEN_SEARCH_SERVICE_DOMAIN");

    public static readonly ResourceTypeFilter RdsDbInstance = new("RDS_DB_INSTANCE");

    public static readonly ResourceTypeFilter RdsDbCluster = new("RDS_DB_CLUSTER");

    public static readonly ResourceTypeFilter RedshiftCluster = new("REDSHIFT_CLUSTER");

    public static readonly ResourceTypeFilter Route53HostedZone = new("ROUTE53_HOSTED_ZONE");

    public static readonly ResourceTypeFilter Route53HealthCheck = new("ROUTE53_HEALTH_CHECK");

    public static readonly ResourceTypeFilter S3Bucket = new("S3_BUCKET");

    public static readonly ResourceTypeFilter SagemakerEndpoint = new("SAGEMAKER_ENDPOINT");

    public static readonly ResourceTypeFilter SnsTopic = new("SNS_TOPIC");

    public static readonly ResourceTypeFilter SqsQueue = new("SQS_QUEUE");

    public static readonly ResourceTypeFilter StepFunctionsActivity = new("STEP_FUNCTIONS_ACTIVITY");

    public static readonly ResourceTypeFilter StepFunctionsStateMachine = new("STEP_FUNCTIONS_STATE_MACHINE");

    public TResult Match<TResult>(Func<TResult> onLogGroups,
        Func<TResult> onCloudfrontDistribution,
        Func<TResult> onDynamodbTable,
        Func<TResult> onEc2NatGateway,
        Func<TResult> onEcsCluster,
        Func<TResult> onEcsService,
        Func<TResult> onEksCluster,
        Func<TResult> onElasticBeanstalkEnvironment,
        Func<TResult> onElasticLoadBalancerLoadBalancer,
        Func<TResult> onElasticLoadBalancingV2LoadBalancer,
        Func<TResult> onElasticLoadBalancingV2TargetGroup,
        Func<TResult> onElasticacheCacheCluster,
        Func<TResult> onElasticsearchDomain,
        Func<TResult> onKinesisStream,
        Func<TResult> onLambdaFunction,
        Func<TResult> onOpenSearchServiceDomain,
        Func<TResult> onRdsDbInstance,
        Func<TResult> onRdsDbCluster,
        Func<TResult> onRedshiftCluster,
        Func<TResult> onRoute53HostedZone,
        Func<TResult> onRoute53HealthCheck,
        Func<TResult> onS3Bucket,
        Func<TResult> onSagemakerEndpoint,
        Func<TResult> onSnsTopic,
        Func<TResult> onSqsQueue,
        Func<TResult> onStepFunctionsActivity,
        Func<TResult> onStepFunctionsStateMachine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LogGroups => onLogGroups(),
            _ when this == CloudfrontDistribution => onCloudfrontDistribution(),
            _ when this == DynamodbTable => onDynamodbTable(),
            _ when this == Ec2NatGateway => onEc2NatGateway(),
            _ when this == EcsCluster => onEcsCluster(),
            _ when this == EcsService => onEcsService(),
            _ when this == EksCluster => onEksCluster(),
            _ when this == ElasticBeanstalkEnvironment => onElasticBeanstalkEnvironment(),
            _ when this == ElasticLoadBalancerLoadBalancer => onElasticLoadBalancerLoadBalancer(),
            _ when this == ElasticLoadBalancingV2LoadBalancer => onElasticLoadBalancingV2LoadBalancer(),
            _ when this == ElasticLoadBalancingV2TargetGroup => onElasticLoadBalancingV2TargetGroup(),
            _ when this == ElasticacheCacheCluster => onElasticacheCacheCluster(),
            _ when this == ElasticsearchDomain => onElasticsearchDomain(),
            _ when this == KinesisStream => onKinesisStream(),
            _ when this == LambdaFunction => onLambdaFunction(),
            _ when this == OpenSearchServiceDomain => onOpenSearchServiceDomain(),
            _ when this == RdsDbInstance => onRdsDbInstance(),
            _ when this == RdsDbCluster => onRdsDbCluster(),
            _ when this == RedshiftCluster => onRedshiftCluster(),
            _ when this == Route53HostedZone => onRoute53HostedZone(),
            _ when this == Route53HealthCheck => onRoute53HealthCheck(),
            _ when this == S3Bucket => onS3Bucket(),
            _ when this == SagemakerEndpoint => onSagemakerEndpoint(),
            _ when this == SnsTopic => onSnsTopic(),
            _ when this == SqsQueue => onSqsQueue(),
            _ when this == StepFunctionsActivity => onStepFunctionsActivity(),
            _ when this == StepFunctionsStateMachine => onStepFunctionsStateMachine(),
            _ => otherwise(Value)
        };

    public void Match(Action onLogGroups,
        Action onCloudfrontDistribution,
        Action onDynamodbTable,
        Action onEc2NatGateway,
        Action onEcsCluster,
        Action onEcsService,
        Action onEksCluster,
        Action onElasticBeanstalkEnvironment,
        Action onElasticLoadBalancerLoadBalancer,
        Action onElasticLoadBalancingV2LoadBalancer,
        Action onElasticLoadBalancingV2TargetGroup,
        Action onElasticacheCacheCluster,
        Action onElasticsearchDomain,
        Action onKinesisStream,
        Action onLambdaFunction,
        Action onOpenSearchServiceDomain,
        Action onRdsDbInstance,
        Action onRdsDbCluster,
        Action onRedshiftCluster,
        Action onRoute53HostedZone,
        Action onRoute53HealthCheck,
        Action onS3Bucket,
        Action onSagemakerEndpoint,
        Action onSnsTopic,
        Action onSqsQueue,
        Action onStepFunctionsActivity,
        Action onStepFunctionsStateMachine,
        Action<string> otherwise)
    {
        if (this == LogGroups) onLogGroups();
        else if (this == CloudfrontDistribution) onCloudfrontDistribution();
        else if (this == DynamodbTable) onDynamodbTable();
        else if (this == Ec2NatGateway) onEc2NatGateway();
        else if (this == EcsCluster) onEcsCluster();
        else if (this == EcsService) onEcsService();
        else if (this == EksCluster) onEksCluster();
        else if (this == ElasticBeanstalkEnvironment) onElasticBeanstalkEnvironment();
        else if (this == ElasticLoadBalancerLoadBalancer) onElasticLoadBalancerLoadBalancer();
        else if (this == ElasticLoadBalancingV2LoadBalancer) onElasticLoadBalancingV2LoadBalancer();
        else if (this == ElasticLoadBalancingV2TargetGroup) onElasticLoadBalancingV2TargetGroup();
        else if (this == ElasticacheCacheCluster) onElasticacheCacheCluster();
        else if (this == ElasticsearchDomain) onElasticsearchDomain();
        else if (this == KinesisStream) onKinesisStream();
        else if (this == LambdaFunction) onLambdaFunction();
        else if (this == OpenSearchServiceDomain) onOpenSearchServiceDomain();
        else if (this == RdsDbInstance) onRdsDbInstance();
        else if (this == RdsDbCluster) onRdsDbCluster();
        else if (this == RedshiftCluster) onRedshiftCluster();
        else if (this == Route53HostedZone) onRoute53HostedZone();
        else if (this == Route53HealthCheck) onRoute53HealthCheck();
        else if (this == S3Bucket) onS3Bucket();
        else if (this == SagemakerEndpoint) onSagemakerEndpoint();
        else if (this == SnsTopic) onSnsTopic();
        else if (this == SqsQueue) onSqsQueue();
        else if (this == StepFunctionsActivity) onStepFunctionsActivity();
        else if (this == StepFunctionsStateMachine) onStepFunctionsStateMachine();
        else otherwise(Value);
    }
}
