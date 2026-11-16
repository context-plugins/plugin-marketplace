using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Key-value pairs shown near the top of the PDF.
/// </summary>
public record SubheaderAttribute
{
    /// <summary>
    /// The attribute name shown near the top of the PDF. This should be a short, human-readable identifier such as "Invoice Number", "VIN", "Service Date", or "Technician".
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(25)]
    public required string Name { get; init; }

    /// <summary>
    /// The corresponding value for the attribute shown near the top of the PDF. This can be any string that provides relevant context or information, such as an invoice number, vehicle identification number, or date.
    /// </summary>
    [JsonPropertyName("value")]
    [MaxLength(25)]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
