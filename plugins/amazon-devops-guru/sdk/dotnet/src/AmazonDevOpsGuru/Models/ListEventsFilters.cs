using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ListEventsFilters
{
    /// <summary>
    /// An ID of an insight that is related to the events you want to filter for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InsightId")]
    public string? InsightId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EventTimeRange")]
    public EventTimeRange? EventTimeRange { get; init; }

    /// <summary>
    /// The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EventClass")]
    public EventClass1? EventClass { get; init; }

    /// <summary>
    /// The Amazon Web Services source that emitted the events you want to filter for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EventSource")]
    public string? EventSource { get; init; }

    /// <summary>
    /// The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, of the events you want returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSource")]
    public DataSource1? DataSource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceCollection")]
    public ResourceCollection? ResourceCollection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
