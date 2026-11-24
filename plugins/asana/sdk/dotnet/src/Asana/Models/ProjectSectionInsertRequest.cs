using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record ProjectSectionInsertRequest
{
    /// <summary>
    /// The project in which to reorder the given section.
    /// </summary>
    [JsonPropertyName("project")]
    public required string Project { get; init; }

    /// <summary>
    /// The section to reorder.
    /// </summary>
    [JsonPropertyName("section")]
    public required string Section { get; init; }

    /// <summary>
    /// Insert the given section immediately before the section specified by this parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("before_section")]
    public string? BeforeSection { get; init; }

    /// <summary>
    /// Insert the given section immediately after the section specified by this parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("after_section")]
    public string? AfterSection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
