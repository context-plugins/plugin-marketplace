using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates how a message is selected from a message group among retries.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MessageSelectionStrategy>))]
public sealed record MessageSelectionStrategy : OpenStringEnum<MessageSelectionStrategy>
{
    private MessageSelectionStrategy(string value) : base(value)
    {
    }

    public static readonly MessageSelectionStrategy Random = new("Random");

    public static readonly MessageSelectionStrategy Ordered = new("Ordered");

    public TResult Match<TResult>(Func<TResult> onRandom, Func<TResult> onOrdered, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Random => onRandom(),
            _ when this == Ordered => onOrdered(),
            _ => otherwise(Value)
        };

    public void Match(Action onRandom, Action onOrdered, Action<string> otherwise)
    {
        if (this == Random) onRandom();
        else if (this == Ordered) onOrdered();
        else otherwise(Value);
    }
}
