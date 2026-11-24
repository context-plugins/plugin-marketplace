using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Salesforce data source configuration.
/// </summary>
public record SalesforceSourceConfig1
{
    /// <summary>
    /// The Salesforce objects to exclude from the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public SalesforceOrg3? ExcludeObjects { get; init; }

    /// <summary>
    /// Required. Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be from <c>5 minutes</c> to <c>24 hours</c>, inclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pollingInterval")]
    public string? PollingInterval { get; init; }

    /// <summary>
    /// The Salesforce objects to retrieve from the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeObjects")]
    public SalesforceOrg4? IncludeObjects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
