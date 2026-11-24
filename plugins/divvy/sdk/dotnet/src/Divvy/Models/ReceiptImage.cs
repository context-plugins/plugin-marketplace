using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// DTO representing an image from the Spend API.
/// </summary>
public record ReceiptImage
{
    /// <summary>
    /// Uploaded receipt URL
    /// </summary>
    [JsonPropertyName("url")]
    [MinLength(1)]
    public required string Url { get; init; }

    /// <summary>
    /// Receipt file name
    /// </summary>
    [JsonPropertyName("filename")]
    [MinLength(1)]
    public required string Filename { get; init; }

    /// <summary>
    /// BILL-generated UUID for the receipt image
    /// </summary>
    [JsonPropertyName("uuid")]
    [MinLength(1)]
    public required string Uuid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
