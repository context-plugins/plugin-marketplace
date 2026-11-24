using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record FindingDeliverdDevTasksApi
{
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public required string Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evidence")]
    [MaxLength(10)]
    public IReadOnlyList<string>? Evidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
