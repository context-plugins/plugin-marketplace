using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record DataSource
{
    /// <summary>
    /// The data source Amazon Resource Name (ARN).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataSourceArn")]
    public string? DataSourceArn { get; init; }

    /// <summary>
    /// The name of the data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The description of the data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The type of the data source. AWS_LAMBDA: The data source is an Lambda function. AMAZON_DYNAMODB: The data source is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data source is an Amazon OpenSearch Service domain. AMAZON_OPENSEARCH_SERVICE: The data source is an Amazon OpenSearch Service domain. AMAZON_EVENTBRIDGE: The data source is an Amazon EventBridge configuration. AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock runtime. NONE: There is no data source. Use this type when you want to invoke a GraphQL operation without connecting to a data source, such as when you're perf
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeAwsAppSyncDataSourcesApi? Type { get; init; }

    /// <summary>
    /// The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceRoleArn")]
    public string? ServiceRoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dynamodbConfig")]
    public DynamodbDataSourceConfig? DynamodbConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaConfig")]
    public LambdaDataSourceConfig? LambdaConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("elasticsearchConfig")]
    public ElasticsearchDataSourceConfig? ElasticsearchConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openSearchServiceConfig")]
    public OpenSearchServiceDataSourceConfig? OpenSearchServiceConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpConfig")]
    public HttpDataSourceConfig? HttpConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relationalDatabaseConfig")]
    public RelationalDatabaseDataSourceConfig? RelationalDatabaseConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventBridgeConfig")]
    public EventBridgeDataSourceConfig? EventBridgeConfig { get; init; }

    /// <summary>
    /// Enables or disables enhanced data source metrics for specified data sources. Note that metricsConfig won't be used unless the dataSourceLevelMetricsBehavior value is set to PER_DATA_SOURCE_METRICS. If the dataSourceLevelMetricsBehavior is set to FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricsConfig")]
    public MetricsConfig? MetricsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
