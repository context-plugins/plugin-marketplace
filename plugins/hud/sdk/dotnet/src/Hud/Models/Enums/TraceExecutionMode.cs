using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TraceExecutionMode>))]
public sealed record TraceExecutionMode : OpenStringEnum<TraceExecutionMode>
{
    private TraceExecutionMode(string value) : base(value)
    {
    }

    public static readonly TraceExecutionMode External = new("external");

    public static readonly TraceExecutionMode Cloud = new("cloud");

    public static readonly TraceExecutionMode Hosted = new("hosted");

    public TResult Match<TResult>(Func<TResult> onExternal,
        Func<TResult> onCloud,
        Func<TResult> onHosted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == External => onExternal(),
            _ when this == Cloud => onCloud(),
            _ when this == Hosted => onHosted(),
            _ => otherwise(Value)
        };

    public void Match(Action onExternal, Action onCloud, Action onHosted, Action<string> otherwise)
    {
        if (this == External) onExternal();
        else if (this == Cloud) onCloud();
        else if (this == Hosted) onHosted();
        else otherwise(Value);
    }
}
