using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Transaction Custom Fields update request dto.
/// </summary>
public record BulkUpdateTxCustomFieldRequestDto
{
    /// <summary>
    /// List of custom field and value updates
    /// </summary>
    [JsonPropertyName("customFields")]
    [MinLength(1)]
    public required IReadOnlyList<UpdateCustomFieldDto> CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
