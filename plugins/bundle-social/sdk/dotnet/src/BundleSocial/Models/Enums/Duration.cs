using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Duration>))]
public sealed record Duration : OpenStringEnum<Duration>
{
    private Duration(string value) : base(value)
    {
    }

    public static readonly Duration Forever = new("forever");

    public static readonly Duration Once = new("once");

    public static readonly Duration Repeating = new("repeating");

    public TResult Match<TResult>(Func<TResult> onForever,
        Func<TResult> onOnce,
        Func<TResult> onRepeating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Forever => onForever(),
            _ when this == Once => onOnce(),
            _ when this == Repeating => onRepeating(),
            _ => otherwise(Value)
        };

    public void Match(Action onForever, Action onOnce, Action onRepeating, Action<string> otherwise)
    {
        if (this == Forever) onForever();
        else if (this == Once) onOnce();
        else if (this == Repeating) onRepeating();
        else otherwise(Value);
    }
}
