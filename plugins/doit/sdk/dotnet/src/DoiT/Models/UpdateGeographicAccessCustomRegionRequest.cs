using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record UpdateGeographicAccessCustomRegionRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(200, MinimumLength = 1)]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCodes")]
    [MinLength(1)]
    [UniqueItems]
    public IReadOnlyList<string>? CountryCodes { get; init; }
}
