using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// PayBy.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisbursementSubType>))]
public sealed record DisbursementSubType : OpenStringEnum<DisbursementSubType>
{
    private DisbursementSubType(string value) : base(value)
    {
    }

    public static readonly DisbursementSubType None = new("NONE");

    public static readonly DisbursementSubType Wire = new("WIRE");

    public static readonly DisbursementSubType Iach = new("IACH");

    public static readonly DisbursementSubType Local = new("LOCAL");

    public static readonly DisbursementSubType Multiple = new("MULTIPLE");

    public static readonly DisbursementSubType Ach = new("ACH");

    public static readonly DisbursementSubType Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onWire,
        Func<TResult> onIach,
        Func<TResult> onLocal,
        Func<TResult> onMultiple,
        Func<TResult> onAch,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Wire => onWire(),
            _ when this == Iach => onIach(),
            _ when this == Local => onLocal(),
            _ when this == Multiple => onMultiple(),
            _ when this == Ach => onAch(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onWire,
        Action onIach,
        Action onLocal,
        Action onMultiple,
        Action onAch,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Wire) onWire();
        else if (this == Iach) onIach();
        else if (this == Local) onLocal();
        else if (this == Multiple) onMultiple();
        else if (this == Ach) onAch();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
