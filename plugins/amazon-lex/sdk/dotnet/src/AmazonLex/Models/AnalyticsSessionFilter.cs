using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsSessionFilter
{
    /// <summary>
    /// The category by which to filter the sessions. The descriptions for each option are as follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with. Duration – The duration of the session. conversationEndState – The final state of the session. SessionId – The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request in a session. IntentPath – The order of intents taken i
    /// </summary>
    [JsonPropertyName("name")]
    public required Name13 Name { get; init; }

    /// <summary>
    /// The operation by which to filter the category. The following operations are possible: CO – Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ. Duration – EQ, GT, LT. conversationEndState – EQ, CO. SessionId – EQ. OriginatingRequestId – EQ. IntentPath – EQ.
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator4 Operator { get; init; }

    /// <summary>
    /// An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is EQ or CO. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the name, operator, and values fields are Modality, EQ, and [Speech, Text], the operation filters for results where the modality was either Speech or Text.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
