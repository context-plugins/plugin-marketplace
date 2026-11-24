using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CanonicalVerdict>))]
public sealed record CanonicalVerdict : OpenStringEnum<CanonicalVerdict>
{
    private CanonicalVerdict(string value) : base(value)
    {
    }

    public static readonly CanonicalVerdict Passed = new("passed");

    public static readonly CanonicalVerdict Failed = new("failed");

    public static readonly CanonicalVerdict Unknown = new("unknown");

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
