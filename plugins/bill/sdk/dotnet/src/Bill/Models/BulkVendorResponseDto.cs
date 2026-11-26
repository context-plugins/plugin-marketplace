using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Bulk vendor response.
/// </summary>
public record BulkVendorResponseDto
{
    /// <summary>
    /// List of vendors
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendors")]
    public IReadOnlyList<VendorResponseDto>? Vendors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
