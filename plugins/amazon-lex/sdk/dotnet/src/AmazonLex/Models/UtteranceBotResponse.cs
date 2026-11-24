using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record UtteranceBotResponse
{
    /// <summary>
    /// The text of the response to the utterance from the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// The type of the response. The following values are possible: PlainText – A plain text string. CustomPayload – A response string that you can customize to include data or metadata for your application. SSML – A string that includes Speech Synthesis Markup Language to customize the audio response. ImageResponseCard – An image with buttons that the customer can select. See ImageResponseCard for more information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contentType")]
    public ContentType1? ContentType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageResponseCard")]
    public ImageResponseCard? ImageResponseCard { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
