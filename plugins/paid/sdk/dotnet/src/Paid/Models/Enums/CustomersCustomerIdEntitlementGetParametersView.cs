using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomersCustomerIdEntitlementGetParametersView>))]
public sealed record CustomersCustomerIdEntitlementGetParametersView : OpenStringEnum<CustomersCustomerIdEntitlementGetParametersView>
{
    private CustomersCustomerIdEntitlementGetParametersView(string value) : base(value)
    {
    }

    public static readonly CustomersCustomerIdEntitlementGetParametersView All = new("all");

    public static readonly CustomersCustomerIdEntitlementGetParametersView ActiveOnly = new("active_only");

    public TResult Match<TResult>(Func<TResult> onAll, Func<TResult> onActiveOnly, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == ActiveOnly => onActiveOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onActiveOnly, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == ActiveOnly) onActiveOnly();
        else otherwise(Value);
    }
}
