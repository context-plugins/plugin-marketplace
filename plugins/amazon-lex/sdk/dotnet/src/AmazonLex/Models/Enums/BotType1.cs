using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of a bot to create.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotType1>))]
public sealed record BotType1 : OpenStringEnum<BotType1>
{
    private BotType1(string value) : base(value)
    {
    }

    public static readonly BotType1 Bot = new("Bot");

    public static readonly BotType1 BotNetwork = new("BotNetwork");

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
