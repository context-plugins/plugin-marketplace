using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record GetContentModerationRequestMetadata
{
    /// <summary>
    /// The sorting method chosen for a GetContentModeration request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SortBy")]
    public SortBy1? SortBy { get; init; }

    /// <summary>
    /// The aggregation method chosen for a GetContentModeration request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AggregateBy")]
    public AggregateBy1? AggregateBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
