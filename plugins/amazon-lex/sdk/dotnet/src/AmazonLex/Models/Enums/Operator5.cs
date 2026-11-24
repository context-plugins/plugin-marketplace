using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operation by which to filter the category. The following operations are possible: CO – Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ. SessionId – EQ. OriginatingRequestId – EQ. UtteranceState – EQ. UtteranceText – EQ, CO.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator5>))]
public sealed record Operator5 : OpenStringEnum<Operator5>
{
    private Operator5(string value) : base(value)
    {
    }

    public static readonly Operator5 Eq = new("EQ");

    public static readonly Operator5 Gt = new("GT");

    public static readonly Operator5 Lt = new("LT");

    public TResult Match<TResult>(Func<TResult> onEq,
        Func<TResult> onGt,
        Func<TResult> onLt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Eq => onEq(),
            _ when this == Gt => onGt(),
            _ when this == Lt => onLt(),
            _ => otherwise(Value)
        };

    public void Match(Action onEq, Action onGt, Action onLt, Action<string> otherwise)
    {
        if (this == Eq) onEq();
        else if (this == Gt) onGt();
        else if (this == Lt) onLt();
        else otherwise(Value);
    }
}
