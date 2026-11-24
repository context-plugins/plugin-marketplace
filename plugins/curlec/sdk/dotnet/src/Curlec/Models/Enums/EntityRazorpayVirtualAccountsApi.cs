using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayVirtualAccountsApi>))]
public sealed record EntityRazorpayVirtualAccountsApi : OpenStringEnum<EntityRazorpayVirtualAccountsApi>
{
    private EntityRazorpayVirtualAccountsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayVirtualAccountsApi VirtualAccount = new("virtual_account");

    public TResult Match<TResult>(Func<TResult> onVirtualAccount, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VirtualAccount => onVirtualAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onVirtualAccount, Action<string> otherwise)
    {
        if (this == VirtualAccount) onVirtualAccount();
        else otherwise(Value);
    }
}
