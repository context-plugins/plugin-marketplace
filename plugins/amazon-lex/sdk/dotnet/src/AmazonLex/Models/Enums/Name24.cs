using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The name of the field to filter the list of bots.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name24>))]
public sealed record Name24 : OpenStringEnum<Name24>
{
    private Name24(string value) : base(value)
    {
    }

    public static readonly Name24 BotName = new("BotName");

    public static readonly Name24 BotType = new("BotType");

    public TResult Match<TResult>(Func<TResult> onBotName, Func<TResult> onBotType, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BotName => onBotName(),
            _ when this == BotType => onBotType(),
            _ => otherwise(Value)
        };

    public void Match(Action onBotName, Action onBotType, Action<string> otherwise)
    {
        if (this == BotName) onBotName();
        else if (this == BotType) onBotType();
        else otherwise(Value);
    }
}
