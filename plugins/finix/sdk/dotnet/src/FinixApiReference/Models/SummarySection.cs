using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Free-text sections displayed above the line items of the PDF receipt.
/// </summary>
public record SummarySection
{
    /// <summary>
    /// The heading of a free-text section displayed above the line items of the PDF receipt.
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(200)]
    public required string Name { get; init; }

    /// <summary>
    /// The body of a free-text section displayed above the line items of the PDF receipt.
    /// </summary>
    [JsonPropertyName("value")]
    [MaxLength(2000)]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
