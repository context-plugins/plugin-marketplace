using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GetUtterancesViewRequest
{
    /// <summary>
    /// The name of the bot for which utterance information should be returned.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    /// <summary>
    /// An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.
    /// </summary>
    [JsonPropertyName("botVersions")]
    public required IReadOnlyList<string> BotVersions { get; init; }

    /// <summary>
    /// To return utterances that were recognized and handled, use Detected. To return utterances that were not recognized, use Missed.
    /// </summary>
    [JsonPropertyName("statusType")]
    public required StatusType StatusType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
