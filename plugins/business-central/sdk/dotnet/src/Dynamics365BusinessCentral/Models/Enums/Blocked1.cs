using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Blocked1>))]
public sealed record Blocked1 : OpenStringEnum<Blocked1>
{
    private Blocked1(string value) : base(value)
    {
    }

    public static readonly Blocked1 Ship = new("Ship");

    public static readonly Blocked1 Invoice = new("Invoice");

    public static readonly Blocked1 All = new("All");

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
