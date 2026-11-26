using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// Whether the vendor is blocked
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Blocked2>))]
public sealed record Blocked2 : OpenStringEnum<Blocked2>
{
    private Blocked2(string value) : base(value)
    {
    }

    public static readonly Blocked2 Payment = new("Payment");

    public static readonly Blocked2 All = new("All");

    public TResult Match<TResult>(Func<TResult> onPayment, Func<TResult> onAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payment => onPayment(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayment, Action onAll, Action<string> otherwise)
    {
        if (this == Payment) onPayment();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
