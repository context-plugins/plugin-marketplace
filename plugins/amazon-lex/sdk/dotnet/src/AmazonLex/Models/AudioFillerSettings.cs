using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AudioFillerSettings
{
    /// <summary>
    /// Specifies whether audio filler playback is enabled for the bot locale. Set to true to play filler audio while Amazon Lex processes a user utterance. Set to false to disable filler audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// The identifier of the audio filler to play while Amazon Lex processes the user's input. This field is required when enabled is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioType")]
    public AudioType? AudioType { get; init; }

    /// <summary>
    /// The time, in milliseconds, to wait after the end of the user's utterance before starting audio filler playback. Valid range is 500 to 5000 milliseconds. If not specified, Amazon Lex uses a default of 2500 milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDelayInMilliseconds")]
    public int? StartDelayInMilliseconds { get; init; }

    /// <summary>
    /// The minimum time, in milliseconds, that audio filler plays once it has started, even if the bot response becomes ready sooner. Valid range is 1000 to 5000 milliseconds. If not specified, Amazon Lex uses a default of 3000 milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimumPlayDurationInMilliseconds")]
    public int? MinimumPlayDurationInMilliseconds { get; init; }

    /// <summary>
    /// The silent delay, in milliseconds, inserted between the end of audio filler playback and the start of the bot's response. Valid range is 200 to 1000 milliseconds. If not specified, Amazon Lex uses a default of 500 milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseDeliveryDelayInMilliseconds")]
    public int? ResponseDeliveryDelayInMilliseconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
