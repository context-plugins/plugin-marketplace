using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Where a result's verdict comes from.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QaResultSource>))]
public sealed record QaResultSource : OpenStringEnum<QaResultSource>
{
    private QaResultSource(string value) : base(value)
    {
    }

    public static readonly QaResultSource Analysis = new("analysis");

    public static readonly QaResultSource Skipped = new("skipped");

    public static readonly QaResultSource Manual = new("manual");

    public TResult Match<TResult>(Func<TResult> onAnalysis,
        Func<TResult> onSkipped,
        Func<TResult> onManual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Analysis => onAnalysis(),
            _ when this == Skipped => onSkipped(),
            _ when this == Manual => onManual(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnalysis, Action onSkipped, Action onManual, Action<string> otherwise)
    {
        if (this == Analysis) onAnalysis();
        else if (this == Skipped) onSkipped();
        else if (this == Manual) onManual();
        else otherwise(Value);
    }
}
