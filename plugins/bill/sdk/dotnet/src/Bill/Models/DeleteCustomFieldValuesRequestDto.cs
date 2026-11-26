using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Delete custom field values request
/// </summary>
public record DeleteCustomFieldValuesRequestDto
{
    /// <summary>
    /// List of custom field value IDs or UUIDs
    /// </summary>
    [JsonPropertyName("customFieldValueIds")]
    [MinLength(1)]
    public required IReadOnlyList<string> CustomFieldValueIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
