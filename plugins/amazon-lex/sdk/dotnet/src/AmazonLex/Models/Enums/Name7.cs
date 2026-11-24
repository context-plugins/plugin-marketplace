using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The category by which to filter the intent stages. The descriptions for each option are as follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with. SessionId – The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request in a session. IntentName – The name of the intent. IntentStageName – The stage in the intent.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name7>))]
public sealed record Name7 : OpenStringEnum<Name7>
{
    private Name7(string value) : base(value)
    {
    }

    public static readonly Name7 BotAliasId = new("BotAliasId");

    public static readonly Name7 BotVersion = new("BotVersion");

    public static readonly Name7 LocaleId = new("LocaleId");

    public static readonly Name7 Modality = new("Modality");

    public static readonly Name7 Channel = new("Channel");

    public static readonly Name7 SessionId = new("SessionId");

    public static readonly Name7 OriginatingRequestId = new("OriginatingRequestId");

    public static readonly Name7 IntentName = new("IntentName");

    public static readonly Name7 IntentStageName = new("IntentStageName");

    public TResult Match<TResult>(Func<TResult> onBotAliasId,
        Func<TResult> onBotVersion,
        Func<TResult> onLocaleId,
        Func<TResult> onModality,
        Func<TResult> onChannel,
        Func<TResult> onSessionId,
        Func<TResult> onOriginatingRequestId,
        Func<TResult> onIntentName,
        Func<TResult> onIntentStageName,
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
            _ when this == IntentName => onIntentName(),
            _ when this == IntentStageName => onIntentStageName(),
            _ => otherwise(Value)
        };

    public void Match(Action onBotAliasId,
        Action onBotVersion,
        Action onLocaleId,
        Action onModality,
        Action onChannel,
        Action onSessionId,
        Action onOriginatingRequestId,
        Action onIntentName,
        Action onIntentStageName,
        Action<string> otherwise)
    {
        if (this == BotAliasId) onBotAliasId();
        else if (this == BotVersion) onBotVersion();
        else if (this == LocaleId) onLocaleId();
        else if (this == Modality) onModality();
        else if (this == Channel) onChannel();
        else if (this == SessionId) onSessionId();
        else if (this == OriginatingRequestId) onOriginatingRequestId();
        else if (this == IntentName) onIntentName();
        else if (this == IntentStageName) onIntentStageName();
        else otherwise(Value);
    }
}
