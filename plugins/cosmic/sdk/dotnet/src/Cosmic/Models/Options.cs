using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record Options
{
    /// <summary>
    /// Whether editors can see and edit the slug field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug_field")]
    public bool? SlugField { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
