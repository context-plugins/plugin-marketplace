using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreateContactRequestRolesItems>))]
public sealed record CreateContactRequestRolesItems : OpenStringEnum<CreateContactRequestRolesItems>
{
    private CreateContactRequestRolesItems(string value) : base(value)
    {
    }

    public static readonly CreateContactRequestRolesItems Billing = new("BILLING");

    public static readonly CreateContactRequestRolesItems AccountsPayable = new("ACCOUNTS_PAYABLE");

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
