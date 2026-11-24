using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Account type. Always 'route' for Route marketplace accounts.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeRazorpayLinkedAccountsApi>))]
public sealed record TypeRazorpayLinkedAccountsApi : OpenStringEnum<TypeRazorpayLinkedAccountsApi>
{
    private TypeRazorpayLinkedAccountsApi(string value) : base(value)
    {
    }

    public static readonly TypeRazorpayLinkedAccountsApi Route = new("route");

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
