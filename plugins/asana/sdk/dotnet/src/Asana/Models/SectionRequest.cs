using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record SectionRequest
{
    /// <summary>
    /// The text to be displayed as the section name. This cannot be an empty string.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// An existing section within this project before which the added section should be inserted. Cannot be provided together with insert_after.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_before")]
    public string? InsertBefore { get; init; }

    /// <summary>
    /// An existing section within this project after which the added section should be inserted. Cannot be provided together with insert_before.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_after")]
    public string? InsertAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
