using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Filters the dimensions and metrics in the response to just this compatibility. Commonly used as <c>”compatibilityFilter”: “COMPATIBLE”</c> to only return compatible dimensions &amp; metrics.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CompatibilityFilter>))]
public sealed record CompatibilityFilter : OpenStringEnum<CompatibilityFilter>
{
    private CompatibilityFilter(string value) : base(value)
    {
    }

    public static readonly CompatibilityFilter CompatibilityUnspecified = new("COMPATIBILITY_UNSPECIFIED");

    public static readonly CompatibilityFilter Compatible = new("COMPATIBLE");

    public static readonly CompatibilityFilter Incompatible = new("INCOMPATIBLE");

    public TResult Match<TResult>(Func<TResult> onCompatibilityUnspecified,
        Func<TResult> onCompatible,
        Func<TResult> onIncompatible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CompatibilityUnspecified => onCompatibilityUnspecified(),
            _ when this == Compatible => onCompatible(),
            _ when this == Incompatible => onIncompatible(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompatibilityUnspecified,
        Action onCompatible,
        Action onIncompatible,
        Action<string> otherwise)
    {
        if (this == CompatibilityUnspecified) onCompatibilityUnspecified();
        else if (this == Compatible) onCompatible();
        else if (this == Incompatible) onIncompatible();
        else otherwise(Value);
    }
}
