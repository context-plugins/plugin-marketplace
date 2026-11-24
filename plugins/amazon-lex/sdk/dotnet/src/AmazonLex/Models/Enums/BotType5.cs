using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of the bot to be updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotType5>))]
public sealed record BotType5 : OpenStringEnum<BotType5>
{
    private BotType5(string value) : base(value)
    {
    }

    public static readonly BotType5 Bot = new("Bot");

    public static readonly BotType5 BotNetwork = new("BotNetwork");

    public TResult Match<TResult>(Func<TResult> onBot, Func<TResult> onBotNetwork, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bot => onBot(),
            _ when this == BotNetwork => onBotNetwork(),
            _ => otherwise(Value)
        };

    public void Match(Action onBot, Action onBotNetwork, Action<string> otherwise)
    {
        if (this == Bot) onBot();
        else if (this == BotNetwork) onBotNetwork();
        else otherwise(Value);
    }
}
