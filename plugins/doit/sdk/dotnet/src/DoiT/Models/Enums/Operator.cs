using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Comparison operator for filtering metric values: <c>gt</c> (Greater Than), <c>lt</c> (Less
/// Than), <c>lte</c> (Less Than or Equals), <c>gte</c> (Greater Than or Equals), <c>b</c> (Between),
/// <c>nb</c> (Not Between), <c>e</c> (Equals), <c>ne</c> (Not Equals).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator Gt = new("gt");

    public static readonly Operator Lt = new("lt");

    public static readonly Operator Lte = new("lte");

    public static readonly Operator Gte = new("gte");

    public static readonly Operator B = new("b");

    public static readonly Operator Nb = new("nb");

    public static readonly Operator E = new("e");

    public static readonly Operator Ne = new("ne");

    public TResult Match<TResult>(Func<TResult> onGt,
        Func<TResult> onLt,
        Func<TResult> onLte,
        Func<TResult> onGte,
        Func<TResult> onB,
        Func<TResult> onNb,
        Func<TResult> onE,
        Func<TResult> onNe,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gt => onGt(),
            _ when this == Lt => onLt(),
            _ when this == Lte => onLte(),
            _ when this == Gte => onGte(),
            _ when this == B => onB(),
            _ when this == Nb => onNb(),
            _ when this == E => onE(),
            _ when this == Ne => onNe(),
            _ => otherwise(Value)
        };

    public void Match(Action onGt,
        Action onLt,
        Action onLte,
        Action onGte,
        Action onB,
        Action onNb,
        Action onE,
        Action onNe,
        Action<string> otherwise)
    {
        if (this == Gt) onGt();
        else if (this == Lt) onLt();
        else if (this == Lte) onLte();
        else if (this == Gte) onGte();
        else if (this == B) onB();
        else if (this == Nb) onNb();
        else if (this == E) onE();
        else if (this == Ne) onNe();
        else otherwise(Value);
    }
}
