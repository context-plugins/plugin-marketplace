using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity1RazorpayXPayoutsApi>))]
public sealed record Entity1RazorpayXPayoutsApi : OpenStringEnum<Entity1RazorpayXPayoutsApi>
{
    private Entity1RazorpayXPayoutsApi(string value) : base(value)
    {
    }

    public static readonly Entity1RazorpayXPayoutsApi FundAccount = new("fund_account");

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
