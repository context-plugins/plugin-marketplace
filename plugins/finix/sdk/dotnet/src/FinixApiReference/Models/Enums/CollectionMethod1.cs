using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The method by which subscription payments are collected.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CollectionMethod1>))]
public sealed record CollectionMethod1 : OpenStringEnum<CollectionMethod1>
{
    private CollectionMethod1(string value) : base(value)
    {
    }

    public static readonly CollectionMethod1 Ach = new("ACH");

    public static readonly CollectionMethod1 BillAutomatically = new("BILL_AUTOMATICALLY");

    public TResult Match<TResult>(Func<TResult> onAch,
        Func<TResult> onBillAutomatically,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ach => onAch(),
            _ when this == BillAutomatically => onBillAutomatically(),
            _ => otherwise(Value)
        };

    public void Match(Action onAch, Action onBillAutomatically, Action<string> otherwise)
    {
        if (this == Ach) onAch();
        else if (this == BillAutomatically) onBillAutomatically();
        else otherwise(Value);
    }
}
