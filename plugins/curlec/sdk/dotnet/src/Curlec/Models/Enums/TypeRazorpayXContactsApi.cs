using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Built-in types only via API; custom types must be created on Dashboard first
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeRazorpayXContactsApi>))]
public sealed record TypeRazorpayXContactsApi : OpenStringEnum<TypeRazorpayXContactsApi>
{
    private TypeRazorpayXContactsApi(string value) : base(value)
    {
    }

    public static readonly TypeRazorpayXContactsApi Vendor = new("vendor");

    public static readonly TypeRazorpayXContactsApi Customer = new("customer");

    public static readonly TypeRazorpayXContactsApi Employee = new("employee");

    public static readonly TypeRazorpayXContactsApi Self = new("self");

    public TResult Match<TResult>(Func<TResult> onVendor,
        Func<TResult> onCustomer,
        Func<TResult> onEmployee,
        Func<TResult> onSelf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Vendor => onVendor(),
            _ when this == Customer => onCustomer(),
            _ when this == Employee => onEmployee(),
            _ when this == Self => onSelf(),
            _ => otherwise(Value)
        };

    public void Match(Action onVendor, Action onCustomer, Action onEmployee, Action onSelf, Action<string> otherwise)
    {
        if (this == Vendor) onVendor();
        else if (this == Customer) onCustomer();
        else if (this == Employee) onEmployee();
        else if (this == Self) onSelf();
        else otherwise(Value);
    }
}
