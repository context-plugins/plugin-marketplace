using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The method by which subscription payments are collected. At this time, only <c>BILL_AUTOMATICALLY</c> is supported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CollectionMethod>))]
public sealed record CollectionMethod : OpenStringEnum<CollectionMethod>
{
    private CollectionMethod(string value) : base(value)
    {
    }

    public static readonly CollectionMethod BillAutomatically = new("BILL_AUTOMATICALLY");

    public TResult Match<TResult>(Func<TResult> onBillAutomatically, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BillAutomatically => onBillAutomatically(),
            _ => otherwise(Value)
        };

    public void Match(Action onBillAutomatically, Action<string> otherwise)
    {
        if (this == BillAutomatically) onBillAutomatically();
        else otherwise(Value);
    }
}
