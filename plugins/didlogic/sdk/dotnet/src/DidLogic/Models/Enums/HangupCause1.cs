using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<HangupCause1>))]
public sealed record HangupCause1 : OpenStringEnum<HangupCause1>
{
    private HangupCause1(string value) : base(value)
    {
    }

    public static readonly HangupCause1 AmdMachine = new("AMD_MACHINE");

    public static readonly HangupCause1 NormalClearing = new("NORMAL_CLEARING");

    public static readonly HangupCause1 NoAnswer = new("NO_ANSWER");

    public static readonly HangupCause1 Busy = new("BUSY");

    public static readonly HangupCause1 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onAmdMachine,
        Func<TResult> onNormalClearing,
        Func<TResult> onNoAnswer,
        Func<TResult> onBusy,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmdMachine => onAmdMachine(),
            _ when this == NormalClearing => onNormalClearing(),
            _ when this == NoAnswer => onNoAnswer(),
            _ when this == Busy => onBusy(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmdMachine,
        Action onNormalClearing,
        Action onNoAnswer,
        Action onBusy,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == AmdMachine) onAmdMachine();
        else if (this == NormalClearing) onNormalClearing();
        else if (this == NoAnswer) onNoAnswer();
        else if (this == Busy) onBusy();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
