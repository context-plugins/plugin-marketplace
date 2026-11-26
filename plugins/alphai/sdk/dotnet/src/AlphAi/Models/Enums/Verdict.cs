using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Verdict>))]
public sealed record Verdict : OpenStringEnum<Verdict>
{
    private Verdict(string value) : base(value)
    {
    }

    public static readonly Verdict Strong = new("strong");

    public static readonly Verdict Solid = new("solid");

    public static readonly Verdict Mixed = new("mixed");

    public static readonly Verdict Weak = new("weak");

    public TResult Match<TResult>(Func<TResult> onStrong,
        Func<TResult> onSolid,
        Func<TResult> onMixed,
        Func<TResult> onWeak,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Strong => onStrong(),
            _ when this == Solid => onSolid(),
            _ when this == Mixed => onMixed(),
            _ when this == Weak => onWeak(),
            _ => otherwise(Value)
        };

    public void Match(Action onStrong, Action onSolid, Action onMixed, Action onWeak, Action<string> otherwise)
    {
        if (this == Strong) onStrong();
        else if (this == Solid) onSolid();
        else if (this == Mixed) onMixed();
        else if (this == Weak) onWeak();
        else otherwise(Value);
    }
}
