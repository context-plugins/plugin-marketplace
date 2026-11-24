using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Configuration for syncing data from a Salesforce Marketing Cloud source.
/// </summary>
public record SalesforceMarketingCloudSourceConfig
{
    /// <summary>
    /// Optional. The objects to exclude from the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public SourceCatalog1? ExcludeObjects { get; init; }

    /// <summary>
    /// Required. Specifies the polling interval for a full refresh of objects that do not support incremental sync. If not set, a default value of 24 hours is used. The duration must be between 1 and 24 hours, inclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullRefreshPollingInterval")]
    public string? FullRefreshPollingInterval { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
