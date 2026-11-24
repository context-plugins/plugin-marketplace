using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayXAccountValidationApi>))]
public sealed record EntityRazorpayXAccountValidationApi : OpenStringEnum<EntityRazorpayXAccountValidationApi>
{
    private EntityRazorpayXAccountValidationApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayXAccountValidationApi FundAccountValidation = new("fund_account.validation");

    public TResult Match<TResult>(Func<TResult> onFundAccountValidation, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FundAccountValidation => onFundAccountValidation(),
            _ => otherwise(Value)
        };

    public void Match(Action onFundAccountValidation, Action<string> otherwise)
    {
        if (this == FundAccountValidation) onFundAccountValidation();
        else otherwise(Value);
    }
}
