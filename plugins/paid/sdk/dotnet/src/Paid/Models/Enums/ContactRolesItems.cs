using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContactRolesItems>))]
public sealed record ContactRolesItems : OpenStringEnum<ContactRolesItems>
{
    private ContactRolesItems(string value) : base(value)
    {
    }

    public static readonly ContactRolesItems Billing = new("BILLING");

    public static readonly ContactRolesItems AccountsPayable = new("ACCOUNTS_PAYABLE");

    public TResult Match<TResult>(Func<TResult> onBilling,
        Func<TResult> onAccountsPayable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Billing => onBilling(),
            _ when this == AccountsPayable => onAccountsPayable(),
            _ => otherwise(Value)
        };

    public void Match(Action onBilling, Action onAccountsPayable, Action<string> otherwise)
    {
        if (this == Billing) onBilling();
        else if (this == AccountsPayable) onAccountsPayable();
        else otherwise(Value);
    }
}
