using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DtmfSpecification
{
    /// <summary>
    /// The maximum number of DTMF digits allowed in an utterance.
    /// </summary>
    [JsonPropertyName("maxLength")]
    public required int MaxLength { get; init; }

    /// <summary>
    /// How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
    /// </summary>
    [JsonPropertyName("endTimeoutMs")]
    public required int EndTimeoutMs { get; init; }

    /// <summary>
    /// The DTMF character that clears the accumulated DTMF digits and immediately ends the input.
    /// </summary>
    [JsonPropertyName("deletionCharacter")]
    public required string DeletionCharacter { get; init; }

    /// <summary>
    /// The DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.
    /// </summary>
    [JsonPropertyName("endCharacter")]
    public required string EndCharacter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
