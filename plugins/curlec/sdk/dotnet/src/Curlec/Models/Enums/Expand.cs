using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Expand>))]
public sealed record Expand : OpenStringEnum<Expand>
{
    private Expand(string value) : base(value)
    {
    }

    public static readonly Expand Payment = new("payment");

    public static readonly Expand TransactionSettlement = new("transaction.settlement");

    public TResult Match<TResult>(Func<TResult> onPayment,
        Func<TResult> onTransactionSettlement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payment => onPayment(),
            _ when this == TransactionSettlement => onTransactionSettlement(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayment, Action onTransactionSettlement, Action<string> otherwise)
    {
        if (this == Payment) onPayment();
        else if (this == TransactionSettlement) onTransactionSettlement();
        else otherwise(Value);
    }
}
