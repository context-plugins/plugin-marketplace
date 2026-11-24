using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1RazorpayPartnerAccountsApi>))]
public sealed record Status1RazorpayPartnerAccountsApi : OpenStringEnum<Status1RazorpayPartnerAccountsApi>
{
    private Status1RazorpayPartnerAccountsApi(string value) : base(value)
    {
    }

    public static readonly Status1RazorpayPartnerAccountsApi Suspended = new("suspended");

    public TResult Match<TResult>(Func<TResult> onSuspended, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Suspended => onSuspended(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuspended, Action<string> otherwise)
    {
        if (this == Suspended) onSuspended();
        else otherwise(Value);
    }
}
