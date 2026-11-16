using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// IDs of the <c>File</c> resources for the signed and unsigned <c>Compliance Form</c> PDFs.
/// </summary>
public record Files
{
    /// <summary>
    /// The ID of the <c>File</c> resource for the signed <c>Compliance Form</c> PDF.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signed_file")]
    public string? SignedFile { get; init; }

    /// <summary>
    /// The ID of the <c>File</c> resource for the unsigned <c>Compliance Form</c> PDF.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsigned_file")]
    public string? UnsignedFile { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
