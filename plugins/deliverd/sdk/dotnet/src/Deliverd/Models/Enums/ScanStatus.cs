using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ScanStatus>))]
public sealed record ScanStatus : OpenStringEnum<ScanStatus>
{
    private ScanStatus(string value) : base(value)
    {
    }

    public static readonly ScanStatus Pending = new("pending");

    public static readonly ScanStatus Passed = new("passed");

    public static readonly ScanStatus PassedWithWarnings = new("passed_with_warnings");

    public static readonly ScanStatus Blocked = new("blocked");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onPassed,
        Func<TResult> onPassedWithWarnings,
        Func<TResult> onBlocked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Passed => onPassed(),
            _ when this == PassedWithWarnings => onPassedWithWarnings(),
            _ when this == Blocked => onBlocked(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onPassed,
        Action onPassedWithWarnings,
        Action onBlocked,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Passed) onPassed();
        else if (this == PassedWithWarnings) onPassedWithWarnings();
        else if (this == Blocked) onBlocked();
        else otherwise(Value);
    }
}
