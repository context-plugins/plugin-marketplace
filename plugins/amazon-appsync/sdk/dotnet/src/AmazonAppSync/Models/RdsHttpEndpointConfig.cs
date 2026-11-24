using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record RdsHttpEndpointConfig
{
    /// <summary>
    /// Amazon Web Services Region for Amazon RDS HTTP endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsRegion")]
    public string? AwsRegion { get; init; }

    /// <summary>
    /// Amazon RDS cluster Amazon Resource Name (ARN).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dbClusterIdentifier")]
    public string? DbClusterIdentifier { get; init; }

    /// <summary>
    /// Logical database name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databaseName")]
    public string? DatabaseName { get; init; }

    /// <summary>
    /// Logical schema name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public string? Schema { get; init; }

    /// <summary>
    /// Amazon Web Services secret store Amazon Resource Name (ARN) for database credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsSecretStoreArn")]
    public string? AwsSecretStoreArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
