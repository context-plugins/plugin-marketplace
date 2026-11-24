using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// An attachment component added to a group.
/// </summary>
public record CloudDiagramAttachment
{
    /// <summary>
    /// Attachment ID.
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
    /// Attachment color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    /// <summary>
    /// Attachment icon identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icon")]
    public string? Icon { get; init; }

    /// <summary>
    /// Parent group ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group")]
    public string? Group { get; init; }

    /// <summary>
    /// Issues associated with this attachment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issues")]
    public IReadOnlyList<CloudDiagramIssue>? Issues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
