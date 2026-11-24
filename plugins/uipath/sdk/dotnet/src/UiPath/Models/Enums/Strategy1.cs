using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Stop strategy. SoftStop waits for the current activity to complete before stopping; Kill immediately terminates the robot process.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Strategy1>))]
public sealed record Strategy1 : OpenStringEnum<Strategy1>
{
    private Strategy1(string value) : base(value)
    {
    }

    public static readonly Strategy1 SoftStop = new("SoftStop");

    public static readonly Strategy1 Kill = new("Kill");

    public TResult Match<TResult>(Func<TResult> onSoftStop, Func<TResult> onKill, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SoftStop => onSoftStop(),
            _ when this == Kill => onKill(),
            _ => otherwise(Value)
        };

    public void Match(Action onSoftStop, Action onKill, Action<string> otherwise)
    {
        if (this == SoftStop) onSoftStop();
        else if (this == Kill) onKill();
        else otherwise(Value);
    }
}
