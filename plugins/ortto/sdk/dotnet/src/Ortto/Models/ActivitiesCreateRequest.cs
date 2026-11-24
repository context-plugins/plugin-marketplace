using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record ActivitiesCreateRequest
{
    [JsonPropertyName("activities")]
    [MaxLength(100)]
    public required IReadOnlyList<Activity> Activities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_by")]
    public IReadOnlyList<string>? MergeBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
