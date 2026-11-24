using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UpdateAudienceDto
{
    /// <summary>
    /// Audience display name, must be set for project-level audiences.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// Audience unique project-level key, must be set for project-level audiences.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public string? Key { get; init; }

    /// <summary>
    /// Audience description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    /// <summary>
    /// Audience filters, describing logic for segmenting users
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public AudienceOperator? Filters { get; init; }

    /// <summary>
    /// Tags to organize project-level audiences on the dashboard
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
