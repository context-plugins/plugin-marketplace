using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AccountTypeRazorpayXFundAccountsApi>))]
public sealed record AccountTypeRazorpayXFundAccountsApi : OpenStringEnum<AccountTypeRazorpayXFundAccountsApi>
{
    private AccountTypeRazorpayXFundAccountsApi(string value) : base(value)
    {
    }

    public static readonly AccountTypeRazorpayXFundAccountsApi BankAccount = new("bank_account");

    public static readonly AccountTypeRazorpayXFundAccountsApi Vpa = new("vpa");

    public static readonly AccountTypeRazorpayXFundAccountsApi Card = new("card");

    public static readonly AccountTypeRazorpayXFundAccountsApi Wallet = new("wallet");

    public TResult Match<TResult>(Func<TResult> onBankAccount,
        Func<TResult> onVpa,
        Func<TResult> onCard,
        Func<TResult> onWallet,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccount => onBankAccount(),
            _ when this == Vpa => onVpa(),
            _ when this == Card => onCard(),
            _ when this == Wallet => onWallet(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccount, Action onVpa, Action onCard, Action onWallet, Action<string> otherwise)
    {
        if (this == BankAccount) onBankAccount();
        else if (this == Vpa) onVpa();
        else if (this == Card) onCard();
        else if (this == Wallet) onWallet();
        else otherwise(Value);
    }
}
