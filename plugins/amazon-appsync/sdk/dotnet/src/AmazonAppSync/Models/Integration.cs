using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record Integration
{
    /// <summary>
    /// The unique name of the data source that has been configured on the API.
    /// </summary>
    [JsonPropertyName("dataSourceName")]
    public required string DataSourceName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaConfig")]
    public LambdaConfig? LambdaConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
