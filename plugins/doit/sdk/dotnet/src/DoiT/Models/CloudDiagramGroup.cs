using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A group component (VPC, subnet, region, cluster, etc.).
/// </summary>
public record CloudDiagramGroup
{
    /// <summary>
    /// Group ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Component name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Custom component properties (key-value pairs).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("props")]
    public object? Props { get; init; }

    /// <summary>
    /// Cloud resource ID (set on cloud-imported components).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cld_id")]
    public string? CldId { get; init; }

    /// <summary>
    /// Cloud account type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cld_type")]
    public CldType? CldType { get; init; }

    /// <summary>
    /// Whether this component is synced with cloud.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cld_sync")]
    public bool? CldSync { get; init; }

    /// <summary>
    /// Cloud account ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cld_account")]
    public string? CldAccount { get; init; }

    /// <summary>
    /// Tags assigned to the component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Group type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_type")]
    public GroupType? GroupType { get; init; }

    /// <summary>
    /// Group color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    /// <summary>
    /// Group icon identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icon")]
    public string? Icon { get; init; }

    /// <summary>
    /// Components contained in the group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<CloudDiagramGroupItem>? Items { get; init; }

    /// <summary>
    /// Issues associated with this group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issues")]
    public IReadOnlyList<CloudDiagramIssue>? Issues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
