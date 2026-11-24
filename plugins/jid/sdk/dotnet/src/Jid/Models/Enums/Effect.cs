using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Effect>))]
public sealed record Effect : OpenStringEnum<Effect>
{
    private Effect(string value) : base(value)
    {
    }

    public static readonly Effect U002B = new("+");

    public static readonly Effect U002D = new("-");

    public static readonly Effect Neutral = new("neutral");

    public static readonly Effect Review = new("review");

    public TResult Match<TResult>(Func<TResult> onU002B,
        Func<TResult> onU002D,
        Func<TResult> onNeutral,
        Func<TResult> onReview,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == U002B => onU002B(),
            _ when this == U002D => onU002D(),
            _ when this == Neutral => onNeutral(),
            _ when this == Review => onReview(),
            _ => otherwise(Value)
        };

    public void Match(Action onU002B, Action onU002D, Action onNeutral, Action onReview, Action<string> otherwise)
    {
        if (this == U002B) onU002B();
        else if (this == U002D) onU002D();
        else if (this == Neutral) onNeutral();
        else if (this == Review) onReview();
        else otherwise(Value);
    }
}
