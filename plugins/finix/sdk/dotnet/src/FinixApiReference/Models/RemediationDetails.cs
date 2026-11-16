using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Details about the action required to remediate the verification failure.
/// </summary>
public record RemediationDetails
{
    /// <summary>
    /// The ID of the entity that needs to be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_id")]
    public string? EntityId { get; init; }

    /// <summary>
    /// The type of entity that needs to be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_type")]
    public EntityType1? EntityType { get; init; }

    /// <summary>
    /// The name of the field that needs to be updated. Returned when <c>type</c> is <c>FIELD_UPDATE</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("field_name")]
    public string? FieldName { get; init; }

    /// <summary>
    /// The type of file that needs to be uploaded. Returned when <c>type</c> is <c>FILE_UPLOAD</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_type")]
    public FileType? FileType { get; init; }

    /// <summary>
    /// The type of remediation action required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type16? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
