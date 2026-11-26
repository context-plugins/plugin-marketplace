using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// Whether the customer is blocked
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Blocked>))]
public sealed record Blocked : OpenStringEnum<Blocked>
{
    private Blocked(string value) : base(value)
    {
    }

    public static readonly Blocked Ship = new("Ship");

    public static readonly Blocked Invoice = new("Invoice");

    public static readonly Blocked All = new("All");

    public TResult Match<TResult>(Func<TResult> onShip,
        Func<TResult> onInvoice,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ship => onShip(),
            _ when this == Invoice => onInvoice(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onShip, Action onInvoice, Action onAll, Action<string> otherwise)
    {
        if (this == Ship) onShip();
        else if (this == Invoice) onInvoice();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
