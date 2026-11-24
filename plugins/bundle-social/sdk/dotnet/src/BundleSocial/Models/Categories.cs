using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record Categories
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryCategory")]
    public PrimaryCategory? PrimaryCategory { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalCategories")]
    public IReadOnlyList<AdditionalCategory>? AdditionalCategories { get; init; }
}
