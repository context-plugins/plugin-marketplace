using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// penniless = reverse penny drop (UPI intent); optimized = system chooses best method
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationType>))]
public sealed record ValidationType : OpenStringEnum<ValidationType>
{
    private ValidationType(string value) : base(value)
    {
    }

    public static readonly ValidationType Pennydrop = new("pennydrop");

    public static readonly ValidationType Penniless = new("penniless");

    public static readonly ValidationType Optimized = new("optimized");

    public TResult Match<TResult>(Func<TResult> onPennydrop,
        Func<TResult> onPenniless,
        Func<TResult> onOptimized,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pennydrop => onPennydrop(),
            _ when this == Penniless => onPenniless(),
            _ when this == Optimized => onOptimized(),
            _ => otherwise(Value)
        };

    public void Match(Action onPennydrop, Action onPenniless, Action onOptimized, Action<string> otherwise)
    {
        if (this == Pennydrop) onPennydrop();
        else if (this == Penniless) onPenniless();
        else if (this == Optimized) onOptimized();
        else otherwise(Value);
    }
}
