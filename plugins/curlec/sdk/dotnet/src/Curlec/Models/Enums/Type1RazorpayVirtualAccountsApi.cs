using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1RazorpayVirtualAccountsApi>))]
public sealed record Type1RazorpayVirtualAccountsApi : OpenStringEnum<Type1RazorpayVirtualAccountsApi>
{
    private Type1RazorpayVirtualAccountsApi(string value) : base(value)
    {
    }

    public static readonly Type1RazorpayVirtualAccountsApi Vpa = new("vpa");

    public TResult Match<TResult>(Func<TResult> onVpa, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Vpa => onVpa(),
            _ => otherwise(Value)
        };

    public void Match(Action onVpa, Action<string> otherwise)
    {
        if (this == Vpa) onVpa();
        else otherwise(Value);
    }
}
