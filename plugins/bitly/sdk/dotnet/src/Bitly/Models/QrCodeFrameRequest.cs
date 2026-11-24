using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

public record QrCodeFrameRequest
{
    /// <summary>
    /// The unique id of the selected frame
    /// </summary>
    [JsonPropertyName("id")]
    public QrCodeFrameType2 Id { get; init; } = QrCodeFrameType2.None;

    /// <summary>
    /// An object of named colors denoting which color should go to which area of the frame
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("colors")]
    public Colors? Colors { get; init; }

    /// <summary>
    /// The text to be inserted into the QR code's frame
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public Text1? Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
