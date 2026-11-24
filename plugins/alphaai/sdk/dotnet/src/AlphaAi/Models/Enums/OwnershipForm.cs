using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// SEC Form 4 insider rows only — the holding pool the transaction touched. <c>null</c> for non-insider news. A single Form 4 can surface a <c>direct</c> and an <c>indirect</c> leg of the same plan as two separate articles (same filing URL, same date); they are distinct economic events, so SUM them rather than dedupe by URL/accession.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OwnershipForm>))]
public sealed record OwnershipForm : OpenStringEnum<OwnershipForm>
{
    private OwnershipForm(string value) : base(value)
    {
    }

    public static readonly OwnershipForm Direct = new("direct");

    public static readonly OwnershipForm Indirect = new("indirect");

    public TResult Match<TResult>(Func<TResult> onDirect, Func<TResult> onIndirect, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Direct => onDirect(),
            _ when this == Indirect => onIndirect(),
            _ => otherwise(Value)
        };

    public void Match(Action onDirect, Action onIndirect, Action<string> otherwise)
    {
        if (this == Direct) onDirect();
        else if (this == Indirect) onIndirect();
        else otherwise(Value);
    }
}
