using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ServiceName1>))]
public sealed record ServiceName1 : OpenStringEnum<ServiceName1>
{
    private ServiceName1(string value) : base(value)
    {
    }

    public static readonly ServiceName1 ApiGateway = new("API_GATEWAY");

    public static readonly ServiceName1 ApplicationElb = new("APPLICATION_ELB");

    public static readonly ServiceName1 AutoScalingGroup = new("AUTO_SCALING_GROUP");

    public static readonly ServiceName1 CloudFront = new("CLOUD_FRONT");

    public static readonly ServiceName1 DynamoDb = new("DYNAMO_DB");

    public static readonly ServiceName1 Ec2 = new("EC2");

    public static readonly ServiceName1 Ecs = new("ECS");

    public static readonly ServiceName1 Eks = new("EKS");

    public static readonly ServiceName1 ElasticBeanstalk = new("ELASTIC_BEANSTALK");

    public static readonly ServiceName1 ElastiCache = new("ELASTI_CACHE");

    public static readonly ServiceName1 Elb = new("ELB");

    public static readonly ServiceName1 Es = new("ES");

    public static readonly ServiceName1 Kinesis = new("KINESIS");

    public static readonly ServiceName1 Lambda = new("LAMBDA");

    public static readonly ServiceName1 NatGateway = new("NAT_GATEWAY");

    public static readonly ServiceName1 NetworkElb = new("NETWORK_ELB");

    public static readonly ServiceName1 Rds = new("RDS");

    public static readonly ServiceName1 Redshift = new("REDSHIFT");

    public static readonly ServiceName1 Route53 = new("ROUTE_53");

    public static readonly ServiceName1 S3 = new("S3");

    public static readonly ServiceName1 SageMaker = new("SAGE_MAKER");

    public static readonly ServiceName1 Sns = new("SNS");

    public static readonly ServiceName1 Sqs = new("SQS");

    public static readonly ServiceName1 StepFunctions = new("STEP_FUNCTIONS");

    public static readonly ServiceName1 Swf = new("SWF");

    public TResult Match<TResult>(Func<TResult> onApiGateway,
        Func<TResult> onApplicationElb,
        Func<TResult> onAutoScalingGroup,
        Func<TResult> onCloudFront,
        Func<TResult> onDynamoDb,
        Func<TResult> onEc2,
        Func<TResult> onEcs,
        Func<TResult> onEks,
        Func<TResult> onElasticBeanstalk,
        Func<TResult> onElastiCache,
        Func<TResult> onElb,
        Func<TResult> onEs,
        Func<TResult> onKinesis,
        Func<TResult> onLambda,
        Func<TResult> onNatGateway,
        Func<TResult> onNetworkElb,
        Func<TResult> onRds,
        Func<TResult> onRedshift,
        Func<TResult> onRoute53,
        Func<TResult> onS3,
        Func<TResult> onSageMaker,
        Func<TResult> onSns,
        Func<TResult> onSqs,
        Func<TResult> onStepFunctions,
        Func<TResult> onSwf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiGateway => onApiGateway(),
            _ when this == ApplicationElb => onApplicationElb(),
            _ when this == AutoScalingGroup => onAutoScalingGroup(),
            _ when this == CloudFront => onCloudFront(),
            _ when this == DynamoDb => onDynamoDb(),
            _ when this == Ec2 => onEc2(),
            _ when this == Ecs => onEcs(),
            _ when this == Eks => onEks(),
            _ when this == ElasticBeanstalk => onElasticBeanstalk(),
            _ when this == ElastiCache => onElastiCache(),
            _ when this == Elb => onElb(),
            _ when this == Es => onEs(),
            _ when this == Kinesis => onKinesis(),
            _ when this == Lambda => onLambda(),
            _ when this == NatGateway => onNatGateway(),
            _ when this == NetworkElb => onNetworkElb(),
            _ when this == Rds => onRds(),
            _ when this == Redshift => onRedshift(),
            _ when this == Route53 => onRoute53(),
            _ when this == S3 => onS3(),
            _ when this == SageMaker => onSageMaker(),
            _ when this == Sns => onSns(),
            _ when this == Sqs => onSqs(),
            _ when this == StepFunctions => onStepFunctions(),
            _ when this == Swf => onSwf(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiGateway,
        Action onApplicationElb,
        Action onAutoScalingGroup,
        Action onCloudFront,
        Action onDynamoDb,
        Action onEc2,
        Action onEcs,
        Action onEks,
        Action onElasticBeanstalk,
        Action onElastiCache,
        Action onElb,
        Action onEs,
        Action onKinesis,
        Action onLambda,
        Action onNatGateway,
        Action onNetworkElb,
        Action onRds,
        Action onRedshift,
        Action onRoute53,
        Action onS3,
        Action onSageMaker,
        Action onSns,
        Action onSqs,
        Action onStepFunctions,
        Action onSwf,
        Action<string> otherwise)
    {
        if (this == ApiGateway) onApiGateway();
        else if (this == ApplicationElb) onApplicationElb();
        else if (this == AutoScalingGroup) onAutoScalingGroup();
        else if (this == CloudFront) onCloudFront();
        else if (this == DynamoDb) onDynamoDb();
        else if (this == Ec2) onEc2();
        else if (this == Ecs) onEcs();
        else if (this == Eks) onEks();
        else if (this == ElasticBeanstalk) onElasticBeanstalk();
        else if (this == ElastiCache) onElastiCache();
        else if (this == Elb) onElb();
        else if (this == Es) onEs();
        else if (this == Kinesis) onKinesis();
        else if (this == Lambda) onLambda();
        else if (this == NatGateway) onNatGateway();
        else if (this == NetworkElb) onNetworkElb();
        else if (this == Rds) onRds();
        else if (this == Redshift) onRedshift();
        else if (this == Route53) onRoute53();
        else if (this == S3) onS3();
        else if (this == SageMaker) onSageMaker();
        else if (this == Sns) onSns();
        else if (this == Sqs) onSqs();
        else if (this == StepFunctions) onStepFunctions();
        else if (this == Swf) onSwf();
        else otherwise(Value);
    }
}
