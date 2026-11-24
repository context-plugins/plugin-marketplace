using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Add a transaction receipt
/// </summary>
public record TransactionReceiptRequestDto
{
    /// <summary>
    /// Uploaded receipt URL
    /// </summary>
    [JsonPropertyName("url")]
    [MinLength(1)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
