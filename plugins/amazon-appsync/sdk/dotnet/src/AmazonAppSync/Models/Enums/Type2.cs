using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The new data source type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 AwsLambda = new("AWS_LAMBDA");

    public static readonly Type2 AmazonDynamodb = new("AMAZON_DYNAMODB");

    public static readonly Type2 AmazonElasticsearch = new("AMAZON_ELASTICSEARCH");

    public static readonly Type2 None = new("NONE");

    public static readonly Type2 Http = new("HTTP");

    public static readonly Type2 RelationalDatabase = new("RELATIONAL_DATABASE");

    public static readonly Type2 AmazonOpensearchService = new("AMAZON_OPENSEARCH_SERVICE");

    public static readonly Type2 AmazonEventbridge = new("AMAZON_EVENTBRIDGE");

    public static readonly Type2 AmazonBedrockRuntime = new("AMAZON_BEDROCK_RUNTIME");

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
