using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The category by which to filter the intent paths. The descriptions for each option are as follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name12>))]
public sealed record Name12 : OpenStringEnum<Name12>
{
    private Name12(string value) : base(value)
    {
    }

    public static readonly Name12 BotAliasId = new("BotAliasId");

    public static readonly Name12 BotVersion = new("BotVersion");

    public static readonly Name12 LocaleId = new("LocaleId");

    public static readonly Name12 Modality = new("Modality");

    public static readonly Name12 Channel = new("Channel");

    public TResult Match<TResult>(Func<TResult> onBotAliasId,
        Func<TResult> onBotVersion,
        Func<TResult> onLocaleId,
        Func<TResult> onModality,
        Func<TResult> onChannel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BotAliasId => onBotAliasId(),
            _ when this == BotVersion => onBotVersion(),
            _ when this == LocaleId => onLocaleId(),
            _ when this == Modality => onModality(),
            _ when this == Channel => onChannel(),
            _ => otherwise(Value)
        };

    public void Match(Action onBotAliasId,
        Action onBotVersion,
        Action onLocaleId,
        Action onModality,
        Action onChannel,
        Action<string> otherwise)
    {
        if (this == BotAliasId) onBotAliasId();
        else if (this == BotVersion) onBotVersion();
        else if (this == LocaleId) onLocaleId();
        else if (this == Modality) onModality();
        else if (this == Channel) onChannel();
        else otherwise(Value);
    }
}
