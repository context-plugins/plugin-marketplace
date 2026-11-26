using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BlockedDynamics365BusinessCentralApiV20VendorsApi>))]
public sealed record BlockedDynamics365BusinessCentralApiV20VendorsApi : OpenStringEnum<BlockedDynamics365BusinessCentralApiV20VendorsApi>
{
    private BlockedDynamics365BusinessCentralApiV20VendorsApi(string value) : base(value)
    {
    }

    public static readonly BlockedDynamics365BusinessCentralApiV20VendorsApi Payment = new("Payment");

    public static readonly BlockedDynamics365BusinessCentralApiV20VendorsApi All = new("All");

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
