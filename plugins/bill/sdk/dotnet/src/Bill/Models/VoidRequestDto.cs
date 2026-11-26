using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Request to Void a Payment.
/// </summary>
public record VoidRequestDto
{
    [JsonPropertyName("type")]
    public required VoidTypeRequest Type { get; init; }

    /// <summary>
    /// Void payment request reason
    /// </summary>
    [JsonPropertyName("reason")]
    [MaxLength(4000)]
    public required string Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
