using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum for different types of organizations in BILL network.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AcceptInviteType>))]
public sealed record AcceptInviteType : OpenStringEnum<AcceptInviteType>
{
    private AcceptInviteType(string value) : base(value)
    {
    }

    public static readonly AcceptInviteType Vendor = new("VENDOR");

    public static readonly AcceptInviteType Customer = new("CUSTOMER");

    public TResult Match<TResult>(Func<TResult> onVendor, Func<TResult> onCustomer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Vendor => onVendor(),
            _ when this == Customer => onCustomer(),
            _ => otherwise(Value)
        };

    public void Match(Action onVendor, Action onCustomer, Action<string> otherwise)
    {
        if (this == Vendor) onVendor();
        else if (this == Customer) onCustomer();
        else otherwise(Value);
    }
}
