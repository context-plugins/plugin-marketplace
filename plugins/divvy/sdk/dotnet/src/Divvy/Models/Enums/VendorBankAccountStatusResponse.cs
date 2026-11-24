using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// BankAccountStatus.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VendorBankAccountStatusResponse>))]
public sealed record VendorBankAccountStatusResponse : OpenStringEnum<VendorBankAccountStatusResponse>
{
    private VendorBankAccountStatusResponse(string value) : base(value)
    {
    }

    public static readonly VendorBankAccountStatusResponse NoAccount = new("NO_ACCOUNT");

    public static readonly VendorBankAccountStatusResponse NoNetLinkedAccount = new("NO_NET_LINKED_ACCOUNT");

    public static readonly VendorBankAccountStatusResponse NetLinkedAccount = new("NET_LINKED_ACCOUNT");

    public static readonly VendorBankAccountStatusResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onNoAccount,
        Func<TResult> onNoNetLinkedAccount,
        Func<TResult> onNetLinkedAccount,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoAccount => onNoAccount(),
            _ when this == NoNetLinkedAccount => onNoNetLinkedAccount(),
            _ when this == NetLinkedAccount => onNetLinkedAccount(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoAccount,
        Action onNoNetLinkedAccount,
        Action onNetLinkedAccount,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == NoAccount) onNoAccount();
        else if (this == NoNetLinkedAccount) onNoNetLinkedAccount();
        else if (this == NetLinkedAccount) onNetLinkedAccount();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
