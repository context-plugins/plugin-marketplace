using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AccountType1>))]
public sealed record AccountType1 : OpenStringEnum<AccountType1>
{
    private AccountType1(string value) : base(value)
    {
    }

    public static readonly AccountType1 CurrentAccount = new("current_account");

    public static readonly AccountType1 FixedDeposit = new("fixed_deposit");

    public static readonly AccountType1 RazorpayxLite = new("razorpayx_lite");

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
