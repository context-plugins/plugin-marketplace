using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Transmission>))]
public sealed record Transmission : OpenStringEnum<Transmission>
{
    private Transmission(string value) : base(value)
    {
    }

    public static readonly Transmission Manual = new("Manual");

    public static readonly Transmission Unknown = new("Unknown");

    public static readonly Transmission Automatic = new("Automatic");

    public TResult Match<TResult>(Func<TResult> onManual,
        Func<TResult> onUnknown,
        Func<TResult> onAutomatic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == Unknown => onUnknown(),
            _ when this == Automatic => onAutomatic(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual, Action onUnknown, Action onAutomatic, Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == Unknown) onUnknown();
        else if (this == Automatic) onAutomatic();
        else otherwise(Value);
    }
}
