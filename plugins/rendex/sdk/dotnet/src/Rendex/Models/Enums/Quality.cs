using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// Capture quality signal
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Quality>))]
public sealed record Quality : OpenStringEnum<Quality>
{
    private Quality(string value) : base(value)
    {
    }

    public static readonly Quality Full = new("full");

    public static readonly Quality Degraded = new("degraded");

    public static readonly Quality BestAttempt = new("best_attempt");

    public TResult Match<TResult>(Func<TResult> onFull,
        Func<TResult> onDegraded,
        Func<TResult> onBestAttempt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Full => onFull(),
            _ when this == Degraded => onDegraded(),
            _ when this == BestAttempt => onBestAttempt(),
            _ => otherwise(Value)
        };

    public void Match(Action onFull, Action onDegraded, Action onBestAttempt, Action<string> otherwise)
    {
        if (this == Full) onFull();
        else if (this == Degraded) onDegraded();
        else if (this == BestAttempt) onBestAttempt();
        else otherwise(Value);
    }
}
