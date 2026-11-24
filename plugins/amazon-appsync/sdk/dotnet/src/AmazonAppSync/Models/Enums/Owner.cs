using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Owner>))]
public sealed record Owner : OpenStringEnum<Owner>
{
    private Owner(string value) : base(value)
    {
    }

    public static readonly Owner CurrentAccount = new("CURRENT_ACCOUNT");

    public static readonly Owner OtherAccounts = new("OTHER_ACCOUNTS");

    public TResult Match<TResult>(Func<TResult> onCurrentAccount,
        Func<TResult> onOtherAccounts,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CurrentAccount => onCurrentAccount(),
            _ when this == OtherAccounts => onOtherAccounts(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurrentAccount, Action onOtherAccounts, Action<string> otherwise)
    {
        if (this == CurrentAccount) onCurrentAccount();
        else if (this == OtherAccounts) onOtherAccounts();
        else otherwise(Value);
    }
}
