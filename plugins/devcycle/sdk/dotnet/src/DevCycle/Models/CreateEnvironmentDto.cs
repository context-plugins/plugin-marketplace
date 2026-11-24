using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record CreateEnvironmentDto
{
    /// <summary>
    /// A unique display name
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Unique Environment identifier, can be used in the SDK / API to reference by key rather than ID.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    /// <summary>
    /// Environment description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    /// <summary>
    /// Environment display color, used to highlight different environments on the dashboard.
    /// Must use Hex color code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    [MaxLength(9)]
    [RegularExpression("^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$")]
    public string? Color { get; init; }

    /// <summary>
    /// The environment type
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDevCycleManagementEnvironmentsApi Type { get; init; }

    /// <summary>
    /// Environment based settings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settings")]
    public EnvironmentSettings? Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
