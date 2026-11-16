using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of transactions stored/ledgered on the <c>Balance</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 Disbursement = new("DISBURSEMENT");

    public TResult Match<TResult>(Func<TResult> onDisbursement, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disbursement => onDisbursement(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisbursement, Action<string> otherwise)
    {
        if (this == Disbursement) onDisbursement();
        else otherwise(Value);
    }
}
