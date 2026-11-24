using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. Workday data source configuration.
/// </summary>
public record WorkdaySourceConfig2
{
    /// <summary>
    /// Required. Incremental sync polling interval for all objects. If not set, a default value of <c>5 minutes</c> is used. The duration must be from <c>5 minutes</c> to <c>24 hours</c>, inclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pollingInterval")]
    public string? PollingInterval { get; init; }

    /// <summary>
    /// Optional. The objects to retrieve from the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeObjects")]
    public SourceCatalog5? IncludeObjects { get; init; }

    /// <summary>
    /// Optional. The objects to exclude from the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public SourceCatalog1? ExcludeObjects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
