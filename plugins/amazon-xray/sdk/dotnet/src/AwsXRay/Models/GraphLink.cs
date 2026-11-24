using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GraphLink
{
    /// <summary>
    /// Relationship of a trace to the corresponding service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReferenceType")]
    public string? ReferenceType { get; init; }

    /// <summary>
    /// Source trace of a link relationship.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceTraceId")]
    public string? SourceTraceId { get; init; }

    /// <summary>
    /// Destination traces of a link relationship.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DestinationTraceIds")]
    public IReadOnlyList<string>? DestinationTraceIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
