using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The category by which to filter the sessions. The descriptions for each option are as follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with. Duration – The duration of the session. conversationEndState – The final state of the session. SessionId – The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request in a session. IntentPath – The order of intents taken i
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name13>))]
public sealed record Name13 : OpenStringEnum<Name13>
{
    private Name13(string value) : base(value)
    {
    }

    public static readonly Name13 BotAliasId = new("BotAliasId");

    public static readonly Name13 BotVersion = new("BotVersion");

    public static readonly Name13 LocaleId = new("LocaleId");

    public static readonly Name13 Modality = new("Modality");

    public static readonly Name13 Channel = new("Channel");

    public static readonly Name13 Duration = new("Duration");

    public static readonly Name13 ConversationEndState = new("ConversationEndState");

    public static readonly Name13 SessionId = new("SessionId");

    public static readonly Name13 OriginatingRequestId = new("OriginatingRequestId");

    public static readonly Name13 IntentPath = new("IntentPath");

    public TResult Match<TResult>(Func<TResult> onBotAliasId,
        Func<TResult> onBotVersion,
        Func<TResult> onLocaleId,
        Func<TResult> onModality,
        Func<TResult> onChannel,
        Func<TResult> onDuration,
        Func<TResult> onConversationEndState,
        Func<TResult> onSessionId,
        Func<TResult> onOriginatingRequestId,
        Func<TResult> onIntentPath,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BotAliasId => onBotAliasId(),
            _ when this == BotVersion => onBotVersion(),
            _ when this == LocaleId => onLocaleId(),
            _ when this == Modality => onModality(),
            _ when this == Channel => onChannel(),
            _ when this == Duration => onDuration(),
            _ when this == ConversationEndState => onConversationEndState(),
            _ when this == SessionId => onSessionId(),
            _ when this == OriginatingRequestId => onOriginatingRequestId(),
            _ when this == IntentPath => onIntentPath(),
            _ => otherwise(Value)
        };

    public void Match(Action onBotAliasId,
        Action onBotVersion,
        Action onLocaleId,
        Action onModality,
        Action onChannel,
        Action onDuration,
        Action onConversationEndState,
        Action onSessionId,
        Action onOriginatingRequestId,
        Action onIntentPath,
        Action<string> otherwise)
    {
        if (this == BotAliasId) onBotAliasId();
        else if (this == BotVersion) onBotVersion();
        else if (this == LocaleId) onLocaleId();
        else if (this == Modality) onModality();
        else if (this == Channel) onChannel();
        else if (this == Duration) onDuration();
        else if (this == ConversationEndState) onConversationEndState();
        else if (this == SessionId) onSessionId();
        else if (this == OriginatingRequestId) onOriginatingRequestId();
        else if (this == IntentPath) onIntentPath();
        else otherwise(Value);
    }
}
