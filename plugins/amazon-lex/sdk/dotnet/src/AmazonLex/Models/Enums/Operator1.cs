using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operation by which to filter the category. The following operations are possible: CO – Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ. SessionId – EQ. OriginatingRequestId – EQ. IntentName – EQ, CO. IntentEndState – EQ, CO.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator1>))]
public sealed record Operator1 : OpenStringEnum<Operator1>
{
    private Operator1(string value) : base(value)
    {
    }

    public static readonly Operator1 Eq = new("EQ");

    public static readonly Operator1 Gt = new("GT");

    public static readonly Operator1 Lt = new("LT");

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
