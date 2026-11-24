using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Business type. Cannot be updated after creation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BusinessTypeRazorpayLinkedAccountsApi>))]
public sealed record BusinessTypeRazorpayLinkedAccountsApi : OpenStringEnum<BusinessTypeRazorpayLinkedAccountsApi>
{
    private BusinessTypeRazorpayLinkedAccountsApi(string value) : base(value)
    {
    }

    public static readonly BusinessTypeRazorpayLinkedAccountsApi Route = new("route");

    public TResult Match<TResult>(Func<TResult> onRoute, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Route => onRoute(),
            _ => otherwise(Value)
        };

    public void Match(Action onRoute, Action<string> otherwise)
    {
        if (this == Route) onRoute();
        else otherwise(Value);
    }
}
