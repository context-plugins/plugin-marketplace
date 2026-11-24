using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// Who sent the message.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sender>))]
public sealed record Sender : OpenStringEnum<Sender>
{
    private Sender(string value) : base(value)
    {
    }

    public static readonly Sender Customer = new("customer");

    public static readonly Sender Shopper = new("shopper");

    public TResult Match<TResult>(Func<TResult> onCustomer, Func<TResult> onShopper, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Customer => onCustomer(),
            _ when this == Shopper => onShopper(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomer, Action onShopper, Action<string> otherwise)
    {
        if (this == Customer) onCustomer();
        else if (this == Shopper) onShopper();
        else otherwise(Value);
    }
}
