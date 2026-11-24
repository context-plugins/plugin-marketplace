using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Compatibility>))]
public sealed record Compatibility : OpenStringEnum<Compatibility>
{
    private Compatibility(string value) : base(value)
    {
    }

    public static readonly Compatibility CompatibilityUnspecified = new("COMPATIBILITY_UNSPECIFIED");

    public static readonly Compatibility Compatible = new("COMPATIBLE");

    public static readonly Compatibility Incompatible = new("INCOMPATIBLE");

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
