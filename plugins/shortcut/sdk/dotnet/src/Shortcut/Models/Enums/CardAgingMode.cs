using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or "off" (explicitly disabled for this Group). Set to null to inherit the Workspace default.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardAgingMode>))]
public sealed record CardAgingMode : OpenStringEnum<CardAgingMode>
{
    private CardAgingMode(string value) : base(value)
    {
    }

    public static readonly CardAgingMode Off = new("off");

    public static readonly CardAgingMode Gradual = new("gradual");

    public static readonly CardAgingMode Immediate = new("immediate");

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
