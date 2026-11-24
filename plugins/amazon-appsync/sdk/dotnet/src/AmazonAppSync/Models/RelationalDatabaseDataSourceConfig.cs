using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record RelationalDatabaseDataSourceConfig
{
    /// <summary>
    /// Source type for the relational database. RDS_HTTP_ENDPOINT: The relational database source type is an Amazon Relational Database Service (Amazon RDS) HTTP endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relationalDatabaseSourceType")]
    public RelationalDatabaseSourceType? RelationalDatabaseSourceType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rdsHttpEndpointConfig")]
    public RdsHttpEndpointConfig? RdsHttpEndpointConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
