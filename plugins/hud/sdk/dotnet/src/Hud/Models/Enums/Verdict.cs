using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Verdict>))]
public sealed record Verdict : OpenStringEnum<Verdict>
{
    private Verdict(string value) : base(value)
    {
    }

    public static readonly Verdict Passed = new("passed");

    public static readonly Verdict Failed = new("failed");

    public static readonly Verdict Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onPassed, Action onFailed, Action onUnknown, Action<string> otherwise)
    {
        if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
