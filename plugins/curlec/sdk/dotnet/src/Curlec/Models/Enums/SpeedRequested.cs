using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// normal: 5-7 business days. optimum: instant if available, falls back to normal.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpeedRequested>))]
public sealed record SpeedRequested : OpenStringEnum<SpeedRequested>
{
    private SpeedRequested(string value) : base(value)
    {
    }

    public static readonly SpeedRequested Normal = new("normal");

    public static readonly SpeedRequested Optimum = new("optimum");

    public TResult Match<TResult>(Func<TResult> onNormal, Func<TResult> onOptimum, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Normal => onNormal(),
            _ when this == Optimum => onOptimum(),
            _ => otherwise(Value)
        };

    public void Match(Action onNormal, Action onOptimum, Action<string> otherwise)
    {
        if (this == Normal) onNormal();
        else if (this == Optimum) onOptimum();
        else otherwise(Value);
    }
}
