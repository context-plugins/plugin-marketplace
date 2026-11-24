using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of the bot.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotType>))]
public sealed record BotType : OpenStringEnum<BotType>
{
    private BotType(string value) : base(value)
    {
    }

    public static readonly BotType Bot = new("Bot");

    public static readonly BotType BotNetwork = new("BotNetwork");

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
