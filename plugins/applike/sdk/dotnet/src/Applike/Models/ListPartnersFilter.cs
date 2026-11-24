using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record ListPartnersFilter
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MinLength(1)]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
