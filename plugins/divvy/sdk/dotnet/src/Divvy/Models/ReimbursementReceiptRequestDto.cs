using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Add a reimbursement receipt
/// </summary>
public record ReimbursementReceiptRequestDto
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
