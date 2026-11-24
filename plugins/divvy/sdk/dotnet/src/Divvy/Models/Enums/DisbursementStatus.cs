using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// The enum type for disbursement status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisbursementStatus>))]
public sealed record DisbursementStatus : OpenStringEnum<DisbursementStatus>
{
    private DisbursementStatus(string value) : base(value)
    {
    }

    public static readonly DisbursementStatus Schedule = new("SCHEDULE");

    public static readonly DisbursementStatus Done = new("DONE");

    public static readonly DisbursementStatus Failed = new("FAILED");

    public static readonly DisbursementStatus Void = new("VOID");

    public static readonly DisbursementStatus Hold = new("HOLD");

    public static readonly DisbursementStatus Fxhold = new("FXHOLD");

    public static readonly DisbursementStatus Escheated = new("ESCHEATED");

    public static readonly DisbursementStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onSchedule,
        Func<TResult> onDone,
        Func<TResult> onFailed,
        Func<TResult> onVoid,
        Func<TResult> onHold,
        Func<TResult> onFxhold,
        Func<TResult> onEscheated,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Schedule => onSchedule(),
            _ when this == Done => onDone(),
            _ when this == Failed => onFailed(),
            _ when this == Void => onVoid(),
            _ when this == Hold => onHold(),
            _ when this == Fxhold => onFxhold(),
            _ when this == Escheated => onEscheated(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onSchedule,
        Action onDone,
        Action onFailed,
        Action onVoid,
        Action onHold,
        Action onFxhold,
        Action onEscheated,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Schedule) onSchedule();
        else if (this == Done) onDone();
        else if (this == Failed) onFailed();
        else if (this == Void) onVoid();
        else if (this == Hold) onHold();
        else if (this == Fxhold) onFxhold();
        else if (this == Escheated) onEscheated();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
