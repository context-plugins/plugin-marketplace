using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1RazorpayXContactsApi>))]
public sealed record Type1RazorpayXContactsApi : OpenStringEnum<Type1RazorpayXContactsApi>
{
    private Type1RazorpayXContactsApi(string value) : base(value)
    {
    }

    public static readonly Type1RazorpayXContactsApi Vendor = new("vendor");

    public static readonly Type1RazorpayXContactsApi Customer = new("customer");

    public static readonly Type1RazorpayXContactsApi Employee = new("employee");

    public static readonly Type1RazorpayXContactsApi Self = new("self");

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
