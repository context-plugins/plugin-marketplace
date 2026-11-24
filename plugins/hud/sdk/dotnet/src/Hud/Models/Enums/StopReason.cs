using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StopReason>))]
public sealed record StopReason : OpenStringEnum<StopReason>
{
    private StopReason(string value) : base(value)
    {
    }

    public static readonly StopReason Done = new("done");

    public static readonly StopReason MaxSteps = new("max_steps");

    public static readonly StopReason Length = new("length");

    public static readonly StopReason Timeout = new("timeout");

    public static readonly StopReason MalformedToolCall = new("malformed_tool_call");

    public TResult Match<TResult>(Func<TResult> onDone,
        Func<TResult> onMaxSteps,
        Func<TResult> onLength,
        Func<TResult> onTimeout,
        Func<TResult> onMalformedToolCall,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Done => onDone(),
            _ when this == MaxSteps => onMaxSteps(),
            _ when this == Length => onLength(),
            _ when this == Timeout => onTimeout(),
            _ when this == MalformedToolCall => onMalformedToolCall(),
            _ => otherwise(Value)
        };

    public void Match(Action onDone,
        Action onMaxSteps,
        Action onLength,
        Action onTimeout,
        Action onMalformedToolCall,
        Action<string> otherwise)
    {
        if (this == Done) onDone();
        else if (this == MaxSteps) onMaxSteps();
        else if (this == Length) onLength();
        else if (this == Timeout) onTimeout();
        else if (this == MalformedToolCall) onMalformedToolCall();
        else otherwise(Value);
    }
}
