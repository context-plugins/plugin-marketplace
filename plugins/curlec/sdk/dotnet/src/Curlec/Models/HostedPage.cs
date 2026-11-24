using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// Customise labels on the payment details section of the hosted page.
/// </summary>
public record HostedPage
{
    /// <summary>
    /// Map of field names to custom label text. Supports localisation (Hindi, Tamil, etc.).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public Label? Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
