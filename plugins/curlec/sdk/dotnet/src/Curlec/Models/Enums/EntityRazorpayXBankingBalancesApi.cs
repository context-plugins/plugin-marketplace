using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayXBankingBalancesApi>))]
public sealed record EntityRazorpayXBankingBalancesApi : OpenStringEnum<EntityRazorpayXBankingBalancesApi>
{
    private EntityRazorpayXBankingBalancesApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayXBankingBalancesApi BankingBalance = new("banking_balance");

    public TResult Match<TResult>(Func<TResult> onBankingBalance, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankingBalance => onBankingBalance(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankingBalance, Action<string> otherwise)
    {
        if (this == BankingBalance) onBankingBalance();
        else otherwise(Value);
    }
}
