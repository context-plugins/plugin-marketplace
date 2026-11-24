using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatedRole>))]
public sealed record StatedRole : OpenStringEnum<StatedRole>
{
    private StatedRole(string value) : base(value)
    {
    }

    public static readonly StatedRole Buyer = new("buyer");

    public static readonly StatedRole Seller = new("seller");

    public static readonly StatedRole Supplier = new("supplier");

    public static readonly StatedRole Investor = new("investor");

    public static readonly StatedRole Operator = new("operator");

    public TResult Match<TResult>(Func<TResult> onBuyer,
        Func<TResult> onSeller,
        Func<TResult> onSupplier,
        Func<TResult> onInvestor,
        Func<TResult> onOperator,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Buyer => onBuyer(),
            _ when this == Seller => onSeller(),
            _ when this == Supplier => onSupplier(),
            _ when this == Investor => onInvestor(),
            _ when this == Operator => onOperator(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuyer,
        Action onSeller,
        Action onSupplier,
        Action onInvestor,
        Action onOperator,
        Action<string> otherwise)
    {
        if (this == Buyer) onBuyer();
        else if (this == Seller) onSeller();
        else if (this == Supplier) onSupplier();
        else if (this == Investor) onInvestor();
        else if (this == Operator) onOperator();
        else otherwise(Value);
    }
}
