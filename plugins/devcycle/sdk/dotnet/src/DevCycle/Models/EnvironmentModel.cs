using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record EnvironmentModel
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
    /// A unique Environment ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// The Project owning the Environment
    /// </summary>
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    /// <summary>
    /// The environment type
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDevCycleManagementEnvironmentsApi Type { get; init; }

    /// <summary>
    /// ID of the User who created the Environment.
    /// </summary>
    [JsonPropertyName("_createdBy")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// The date the Environment was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Environment was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// SDK Keys for mobile SDKs / client SDKs / server SDKs.
    /// Multiple keys can be created to allow for key rotation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sdkKeys")]
    public SdkKeys? SdkKeys { get; init; }

    /// <summary>
    /// Environment based settings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settings")]
    public EnvironmentSettings? Settings { get; init; }

    /// <summary>
    /// Controls whether the environment is editable for a given user
    /// </summary>
    [JsonPropertyName("readonly")]
    public required bool Readonly { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
