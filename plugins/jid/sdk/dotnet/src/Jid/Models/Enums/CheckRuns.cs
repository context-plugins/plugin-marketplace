using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CheckRuns>))]
public sealed record CheckRuns : OpenStringEnum<CheckRuns>
{
    private CheckRuns(string value) : base(value)
    {
    }

    public static readonly CheckRuns Done = new("done");

    public static readonly CheckRuns Cached = new("cached");

    public static readonly CheckRuns Skipped = new("skipped");

    public static readonly CheckRuns NotApplicable = new("not_applicable");

    public static readonly CheckRuns Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onDone,
        Func<TResult> onCached,
        Func<TResult> onSkipped,
        Func<TResult> onNotApplicable,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Done => onDone(),
            _ when this == Cached => onCached(),
            _ when this == Skipped => onSkipped(),
            _ when this == NotApplicable => onNotApplicable(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onDone,
        Action onCached,
        Action onSkipped,
        Action onNotApplicable,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Done) onDone();
        else if (this == Cached) onCached();
        else if (this == Skipped) onSkipped();
        else if (this == NotApplicable) onNotApplicable();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
