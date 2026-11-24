using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A link component connecting two nodes or groups.
/// </summary>
public record CloudDiagramLink
{
    /// <summary>
    /// Link ID.
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
    /// Link connection type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connection_type")]
    public ConnectionType? ConnectionType { get; init; }

    /// <summary>
    /// Reference to a diagram component, including its parent diagram and layer.
    /// </summary>
    [JsonPropertyName("origin")]
    public required CloudDiagramComponentRef Origin { get; init; }

    /// <summary>
    /// Reference to a diagram component, including its parent diagram and layer.
    /// </summary>
    [JsonPropertyName("destination")]
    public required CloudDiagramComponentRef Destination { get; init; }

    /// <summary>
    /// Owner layer ID for cross-diagram links.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ss_id")]
    public string? OwnerSsId { get; init; }

    /// <summary>
    /// Issues associated with this link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issues")]
    public IReadOnlyList<CloudDiagramIssue>? Issues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
