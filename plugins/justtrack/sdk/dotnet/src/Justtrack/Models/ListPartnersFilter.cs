using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record ListPartnersFilter
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MinLength(1)]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
