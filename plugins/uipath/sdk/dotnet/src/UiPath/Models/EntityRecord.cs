using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// A single entity record. The specific fields available depend on the entity schema configured in the tenant's Data Service. All records include the following system-managed fields.
/// </summary>
public record EntityRecord
{
    /// <summary>
    /// Unique system-assigned identifier of the record
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the record was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedOn")]
    public DateTimeOffset? CreatedOn { get; init; }

    /// <summary>
    /// Identifier of the user or process that created the record
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// ISO 8601 timestamp of the last modification
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModifiedOn")]
    public DateTimeOffset? ModifiedOn { get; init; }

    /// <summary>
    /// Identifier of the user or process that last modified the record
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModifiedBy")]
    public string? ModifiedBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
