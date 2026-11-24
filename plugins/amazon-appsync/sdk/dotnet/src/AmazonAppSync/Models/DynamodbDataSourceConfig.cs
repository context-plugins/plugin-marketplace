using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record DynamodbDataSourceConfig
{
    /// <summary>
    /// The table name.
    /// </summary>
    [JsonPropertyName("tableName")]
    public required string TableName { get; init; }

    /// <summary>
    /// The Amazon Web Services Region.
    /// </summary>
    [JsonPropertyName("awsRegion")]
    public required string AwsRegion { get; init; }

    /// <summary>
    /// Set to TRUE to use Amazon Cognito credentials with this data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useCallerCredentials")]
    public bool? UseCallerCredentials { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deltaSyncConfig")]
    public DeltaSyncConfig? DeltaSyncConfig { get; init; }

    /// <summary>
    /// Set to TRUE to use Conflict Detection and Resolution with this data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versioned")]
    public bool? Versioned { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
