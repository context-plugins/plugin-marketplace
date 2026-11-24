using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GraduationStrategy>))]
public sealed record GraduationStrategy : OpenStringEnum<GraduationStrategy>
{
    private GraduationStrategy(string value) : base(value)
    {
    }

    public static readonly GraduationStrategy Manual = new("MANUAL");

    public static readonly GraduationStrategy SsPerformance = new("SS_PERFORMANCE");

    public TResult Match<TResult>(Func<TResult> onManual,
        Func<TResult> onSsPerformance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == SsPerformance => onSsPerformance(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual, Action onSsPerformance, Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == SsPerformance) onSsPerformance();
        else otherwise(Value);
    }
}
