using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record V1ApisDatasourcesRequest1
{
    /// <summary>
    /// The new description for the data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The new data source type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    /// <summary>
    /// The new service role Amazon Resource Name (ARN) for the data source.
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
