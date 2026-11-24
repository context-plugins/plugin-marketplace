using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The card aging mode for stories in this Group: "gradual" or "immediate". Null if card aging is off.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardAgingMode1>))]
public sealed record CardAgingMode1 : OpenStringEnum<CardAgingMode1>
{
    private CardAgingMode1(string value) : base(value)
    {
    }

    public static readonly CardAgingMode1 Off = new("off");

    public static readonly CardAgingMode1 Gradual = new("gradual");

    public static readonly CardAgingMode1 Immediate = new("immediate");

    public TResult Match<TResult>(Func<TResult> onOff,
        Func<TResult> onGradual,
        Func<TResult> onImmediate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Off => onOff(),
            _ when this == Gradual => onGradual(),
            _ when this == Immediate => onImmediate(),
            _ => otherwise(Value)
        };

    public void Match(Action onOff, Action onGradual, Action onImmediate, Action<string> otherwise)
    {
        if (this == Off) onOff();
        else if (this == Gradual) onGradual();
        else if (this == Immediate) onImmediate();
        else otherwise(Value);
    }
}
