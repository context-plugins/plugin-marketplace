using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Create a custom field value (value added to existing list)
/// </summary>
public record CreateCustomFieldValueRequestDto
{
    /// <summary>
    /// List of custom field values
    /// </summary>
    [JsonPropertyName("values")]
    [MinLength(1)]
    public required IReadOnlyList<string> Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
