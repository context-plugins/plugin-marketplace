using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AccountTypeRazorpayXBankingBalancesApi>))]
public sealed record AccountTypeRazorpayXBankingBalancesApi : OpenStringEnum<AccountTypeRazorpayXBankingBalancesApi>
{
    private AccountTypeRazorpayXBankingBalancesApi(string value) : base(value)
    {
    }

    public static readonly AccountTypeRazorpayXBankingBalancesApi CurrentAccount = new("current_account");

    public static readonly AccountTypeRazorpayXBankingBalancesApi FixedDeposit = new("fixed_deposit");

    public static readonly AccountTypeRazorpayXBankingBalancesApi RazorpayxLite = new("razorpayx_lite");

    public TResult Match<TResult>(Func<TResult> onCurrentAccount,
        Func<TResult> onFixedDeposit,
        Func<TResult> onRazorpayxLite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CurrentAccount => onCurrentAccount(),
            _ when this == FixedDeposit => onFixedDeposit(),
            _ when this == RazorpayxLite => onRazorpayxLite(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurrentAccount, Action onFixedDeposit, Action onRazorpayxLite, Action<string> otherwise)
    {
        if (this == CurrentAccount) onCurrentAccount();
        else if (this == FixedDeposit) onFixedDeposit();
        else if (this == RazorpayxLite) onRazorpayxLite();
        else otherwise(Value);
    }
}
