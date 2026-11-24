using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record DecisionDeliverdDevTasksApi
{
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rationale")]
    [MaxLength(2000)]
    public string? Rationale { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
