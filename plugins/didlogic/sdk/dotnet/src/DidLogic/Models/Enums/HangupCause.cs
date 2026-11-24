using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// How the call ended:
/// - <c>AMD_MACHINE</c> — AMD detected an answering machine; takes precedence over the other values
/// - <c>NORMAL_CLEARING</c> — the call was answered
/// - <c>NO_ANSWER</c> — nobody answered, including calls the caller cancelled before an answer
/// - <c>BUSY</c> — the called party was busy
/// - <c>FAILED</c> — the call could not be connected
/// <para>
/// <c>null</c> for calls made before hangup causes were recorded, for calls whose outcome the platform did not recognise,
/// and for API calls that never reached the destination number.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HangupCause>))]
public sealed record HangupCause : OpenStringEnum<HangupCause>
{
    private HangupCause(string value) : base(value)
    {
    }

    public static readonly HangupCause AmdMachine = new("AMD_MACHINE");

    public static readonly HangupCause NormalClearing = new("NORMAL_CLEARING");

    public static readonly HangupCause NoAnswer = new("NO_ANSWER");

    public static readonly HangupCause Busy = new("BUSY");

    public static readonly HangupCause Failed = new("FAILED");

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
