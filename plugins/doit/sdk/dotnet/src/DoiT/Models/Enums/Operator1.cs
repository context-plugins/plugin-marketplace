using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Comparison operator for period-over-period deltas: <c>gt</c> (Greater Than), <c>gte</c>
/// (Greater Than or Equals), <c>lt</c> (Less Than), <c>lte</c> (Less Than or Equals), <c>b</c>
/// (Between), <c>nb</c> (Not Between).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator1>))]
public sealed record Operator1 : OpenStringEnum<Operator1>
{
    private Operator1(string value) : base(value)
    {
    }

    public static readonly Operator1 Gt = new("gt");

    public static readonly Operator1 Gte = new("gte");

    public static readonly Operator1 Lt = new("lt");

    public static readonly Operator1 Lte = new("lte");

    public static readonly Operator1 B = new("b");

    public static readonly Operator1 Nb = new("nb");

    public TResult Match<TResult>(Func<TResult> onGt,
        Func<TResult> onGte,
        Func<TResult> onLt,
        Func<TResult> onLte,
        Func<TResult> onB,
        Func<TResult> onNb,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gt => onGt(),
            _ when this == Gte => onGte(),
            _ when this == Lt => onLt(),
            _ when this == Lte => onLte(),
            _ when this == B => onB(),
            _ when this == Nb => onNb(),
            _ => otherwise(Value)
        };

    public void Match(Action onGt,
        Action onGte,
        Action onLt,
        Action onLte,
        Action onB,
        Action onNb,
        Action<string> otherwise)
    {
        if (this == Gt) onGt();
        else if (this == Gte) onGte();
        else if (this == Lt) onLt();
        else if (this == Lte) onLte();
        else if (this == B) onB();
        else if (this == Nb) onNb();
        else otherwise(Value);
    }
}
