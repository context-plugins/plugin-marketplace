using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// The field to count distinct values of. Only applicable when aggregation is set to "count".
/// On PATCH, omit to preserve the existing field; send null to remove it.
/// A PATCH that sets <c>aggregation</c> to a value other than "count" without sending <c>count</c> removes it.
/// </summary>
public record Count
{
    /// <summary>
    /// The field identifier to count distinct values of.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The metadata field type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type6DoiTReportsApi Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
