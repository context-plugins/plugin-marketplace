using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Contains the center, top, and bottom text to be used in the QR code
/// </summary>
public record QrCodeText
{
    /// <summary>
    /// An object describing text with color
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("center")]
    public Text? Center { get; init; }

    /// <summary>
    /// An object describing text with color
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top")]
    public Text? Top { get; init; }

    /// <summary>
    /// An object describing text with color
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bottom")]
    public Text? Bottom { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
