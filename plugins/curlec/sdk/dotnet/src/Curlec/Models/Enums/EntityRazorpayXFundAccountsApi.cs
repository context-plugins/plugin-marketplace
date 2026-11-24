using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayXFundAccountsApi>))]
public sealed record EntityRazorpayXFundAccountsApi : OpenStringEnum<EntityRazorpayXFundAccountsApi>
{
    private EntityRazorpayXFundAccountsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayXFundAccountsApi FundAccount = new("fund_account");

    public TResult Match<TResult>(Func<TResult> onFundAccount, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FundAccount => onFundAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onFundAccount, Action<string> otherwise)
    {
        if (this == FundAccount) onFundAccount();
        else otherwise(Value);
    }
}
