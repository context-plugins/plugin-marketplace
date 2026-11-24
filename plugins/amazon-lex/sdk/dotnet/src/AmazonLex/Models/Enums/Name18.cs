using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The category by which to filter the utterances. The descriptions for each option are as follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with. SessionId – The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request in a session. UtteranceState – The state of the utterance. UtteranceText – The text in the utterance.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name18>))]
public sealed record Name18 : OpenStringEnum<Name18>
{
    private Name18(string value) : base(value)
    {
    }

    public static readonly Name18 BotAliasId = new("BotAliasId");

    public static readonly Name18 BotVersion = new("BotVersion");

    public static readonly Name18 LocaleId = new("LocaleId");

    public static readonly Name18 Modality = new("Modality");

    public static readonly Name18 Channel = new("Channel");

    public static readonly Name18 SessionId = new("SessionId");

    public static readonly Name18 OriginatingRequestId = new("OriginatingRequestId");

    public static readonly Name18 UtteranceState = new("UtteranceState");

    public static readonly Name18 UtteranceText = new("UtteranceText");

    public TResult Match<TResult>(Func<TResult> onBotAliasId,
        Func<TResult> onBotVersion,
        Func<TResult> onLocaleId,
        Func<TResult> onModality,
        Func<TResult> onChannel,
        Func<TResult> onSessionId,
        Func<TResult> onOriginatingRequestId,
        Func<TResult> onUtteranceState,
        Func<TResult> onUtteranceText,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BotAliasId => onBotAliasId(),
            _ when this == BotVersion => onBotVersion(),
            _ when this == LocaleId => onLocaleId(),
            _ when this == Modality => onModality(),
            _ when this == Channel => onChannel(),
            _ when this == SessionId => onSessionId(),
            _ when this == OriginatingRequestId => onOriginatingRequestId(),
            _ when this == UtteranceState => onUtteranceState(),
            _ when this == UtteranceText => onUtteranceText(),
            _ => otherwise(Value)
        };

    public void Match(Action onBotAliasId,
        Action onBotVersion,
        Action onLocaleId,
        Action onModality,
        Action onChannel,
        Action onSessionId,
        Action onOriginatingRequestId,
        Action onUtteranceState,
        Action onUtteranceText,
        Action<string> otherwise)
    {
        if (this == BotAliasId) onBotAliasId();
        else if (this == BotVersion) onBotVersion();
        else if (this == LocaleId) onLocaleId();
        else if (this == Modality) onModality();
        else if (this == Channel) onChannel();
        else if (this == SessionId) onSessionId();
        else if (this == OriginatingRequestId) onOriginatingRequestId();
        else if (this == UtteranceState) onUtteranceState();
        else if (this == UtteranceText) onUtteranceText();
        else otherwise(Value);
    }
}
