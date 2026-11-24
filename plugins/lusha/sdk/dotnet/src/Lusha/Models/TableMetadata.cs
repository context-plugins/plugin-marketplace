using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

/// <summary>
/// TableDto — static metadata for a table.
/// </summary>
public record TableMetadata
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityType")]
    public EntityType? EntityType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility")]
    public Visibility? Visibility { get; init; }

    /// <summary>
    /// Lifecycle state. <c>active</c> and <c>archived</c> are filterable via the List Tables <c>status</c> field; <c>deleted</c> is not a filterable status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Resolved owner of the table. <c>id</c> is always present; <c>email</c> and <c>name</c> are resolved best-effort within the API key's account and may be omitted if resolution fails (in which case the object contains only <c>id</c>). Replaces the removed top-level <c>ownerId</c> field - this is a breaking change from the prior response shape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public OwnerInfo? Owner { get; init; }

    /// <summary>
    /// Where and by whom the table was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdBy")]
    public CreatedBy? CreatedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspaceUrl")]
    public string? WorkspaceUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
