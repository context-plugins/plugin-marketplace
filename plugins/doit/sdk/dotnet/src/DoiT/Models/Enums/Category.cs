using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The insight category.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category FinOps = new("FinOps");

    public static readonly Category OperationalExcellence = new("Operational excellence");

    public static readonly Category PerformanceEfficiency = new("Performance efficiency");

    public static readonly Category Reliability = new("Reliability");

    public static readonly Category Security = new("Security");

    public static readonly Category Sustainability = new("Sustainability");

    public TResult Match<TResult>(Func<TResult> onFinOps,
        Func<TResult> onOperationalExcellence,
        Func<TResult> onPerformanceEfficiency,
        Func<TResult> onReliability,
        Func<TResult> onSecurity,
        Func<TResult> onSustainability,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FinOps => onFinOps(),
            _ when this == OperationalExcellence => onOperationalExcellence(),
            _ when this == PerformanceEfficiency => onPerformanceEfficiency(),
            _ when this == Reliability => onReliability(),
            _ when this == Security => onSecurity(),
            _ when this == Sustainability => onSustainability(),
            _ => otherwise(Value)
        };

    public void Match(Action onFinOps,
        Action onOperationalExcellence,
        Action onPerformanceEfficiency,
        Action onReliability,
        Action onSecurity,
        Action onSustainability,
        Action<string> otherwise)
    {
        if (this == FinOps) onFinOps();
        else if (this == OperationalExcellence) onOperationalExcellence();
        else if (this == PerformanceEfficiency) onPerformanceEfficiency();
        else if (this == Reliability) onReliability();
        else if (this == Security) onSecurity();
        else if (this == Sustainability) onSustainability();
        else otherwise(Value);
    }
}
