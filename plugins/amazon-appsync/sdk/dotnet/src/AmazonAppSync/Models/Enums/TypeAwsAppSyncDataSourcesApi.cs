using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The type of the data source. AWS_LAMBDA: The data source is an Lambda function. AMAZON_DYNAMODB: The data source is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data source is an Amazon OpenSearch Service domain. AMAZON_OPENSEARCH_SERVICE: The data source is an Amazon OpenSearch Service domain. AMAZON_EVENTBRIDGE: The data source is an Amazon EventBridge configuration. AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock runtime. NONE: There is no data source. Use this type when you want to invoke a GraphQL operation without connecting to a data source, such as when you're perf
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAwsAppSyncDataSourcesApi>))]
public sealed record TypeAwsAppSyncDataSourcesApi : OpenStringEnum<TypeAwsAppSyncDataSourcesApi>
{
    private TypeAwsAppSyncDataSourcesApi(string value) : base(value)
    {
    }

    public static readonly TypeAwsAppSyncDataSourcesApi AwsLambda = new("AWS_LAMBDA");

    public static readonly TypeAwsAppSyncDataSourcesApi AmazonDynamodb = new("AMAZON_DYNAMODB");

    public static readonly TypeAwsAppSyncDataSourcesApi AmazonElasticsearch = new("AMAZON_ELASTICSEARCH");

    public static readonly TypeAwsAppSyncDataSourcesApi None = new("NONE");

    public static readonly TypeAwsAppSyncDataSourcesApi Http = new("HTTP");

    public static readonly TypeAwsAppSyncDataSourcesApi RelationalDatabase = new("RELATIONAL_DATABASE");

    public static readonly TypeAwsAppSyncDataSourcesApi AmazonOpensearchService = new("AMAZON_OPENSEARCH_SERVICE");

    public static readonly TypeAwsAppSyncDataSourcesApi AmazonEventbridge = new("AMAZON_EVENTBRIDGE");

    public static readonly TypeAwsAppSyncDataSourcesApi AmazonBedrockRuntime = new("AMAZON_BEDROCK_RUNTIME");

    public TResult Match<TResult>(Func<TResult> onAwsLambda,
        Func<TResult> onAmazonDynamodb,
        Func<TResult> onAmazonElasticsearch,
        Func<TResult> onNone,
        Func<TResult> onHttp,
        Func<TResult> onRelationalDatabase,
        Func<TResult> onAmazonOpensearchService,
        Func<TResult> onAmazonEventbridge,
        Func<TResult> onAmazonBedrockRuntime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsLambda => onAwsLambda(),
            _ when this == AmazonDynamodb => onAmazonDynamodb(),
            _ when this == AmazonElasticsearch => onAmazonElasticsearch(),
            _ when this == None => onNone(),
            _ when this == Http => onHttp(),
            _ when this == RelationalDatabase => onRelationalDatabase(),
            _ when this == AmazonOpensearchService => onAmazonOpensearchService(),
            _ when this == AmazonEventbridge => onAmazonEventbridge(),
            _ when this == AmazonBedrockRuntime => onAmazonBedrockRuntime(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsLambda,
        Action onAmazonDynamodb,
        Action onAmazonElasticsearch,
        Action onNone,
        Action onHttp,
        Action onRelationalDatabase,
        Action onAmazonOpensearchService,
        Action onAmazonEventbridge,
        Action onAmazonBedrockRuntime,
        Action<string> otherwise)
    {
        if (this == AwsLambda) onAwsLambda();
        else if (this == AmazonDynamodb) onAmazonDynamodb();
        else if (this == AmazonElasticsearch) onAmazonElasticsearch();
        else if (this == None) onNone();
        else if (this == Http) onHttp();
        else if (this == RelationalDatabase) onRelationalDatabase();
        else if (this == AmazonOpensearchService) onAmazonOpensearchService();
        else if (this == AmazonEventbridge) onAmazonEventbridge();
        else if (this == AmazonBedrockRuntime) onAmazonBedrockRuntime();
        else otherwise(Value);
    }
}
