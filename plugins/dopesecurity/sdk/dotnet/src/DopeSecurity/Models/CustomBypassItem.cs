using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// A custom application bypass entry defined by the admin
/// </summary>
public record CustomBypassItem
{
    /// <summary>
    /// The application name being bypassed
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Note about this bypass entry
    /// </summary>
    [JsonPropertyName("note")]
    [MaxLength(256)]
    public required string Note { get; init; }

    /// <summary>
    /// The user who last updated this entry
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedBy")]
    public string? UpdatedBy { get; init; }

    /// <summary>
    /// ISO-8601 timestamp when this entry was last updated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
