using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AccountTypeDynamics365BusinessCentralApiV20JournalsApi>))]
public sealed record AccountTypeDynamics365BusinessCentralApiV20JournalsApi : OpenStringEnum<AccountTypeDynamics365BusinessCentralApiV20JournalsApi>
{
    private AccountTypeDynamics365BusinessCentralApiV20JournalsApi(string value) : base(value)
    {
    }

    public static readonly AccountTypeDynamics365BusinessCentralApiV20JournalsApi GlAccount = new("G/L Account");

    public static readonly AccountTypeDynamics365BusinessCentralApiV20JournalsApi Customer = new("Customer");

    public static readonly AccountTypeDynamics365BusinessCentralApiV20JournalsApi Vendor = new("Vendor");

    public static readonly AccountTypeDynamics365BusinessCentralApiV20JournalsApi BankAccount = new("Bank Account");

    public static readonly AccountTypeDynamics365BusinessCentralApiV20JournalsApi FixedAsset = new("Fixed Asset");

    public static readonly AccountTypeDynamics365BusinessCentralApiV20JournalsApi Employee = new("Employee");

    public TResult Match<TResult>(Func<TResult> onGlAccount,
        Func<TResult> onCustomer,
        Func<TResult> onVendor,
        Func<TResult> onBankAccount,
        Func<TResult> onFixedAsset,
        Func<TResult> onEmployee,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GlAccount => onGlAccount(),
            _ when this == Customer => onCustomer(),
            _ when this == Vendor => onVendor(),
            _ when this == BankAccount => onBankAccount(),
            _ when this == FixedAsset => onFixedAsset(),
            _ when this == Employee => onEmployee(),
            _ => otherwise(Value)
        };

    public void Match(Action onGlAccount,
        Action onCustomer,
        Action onVendor,
        Action onBankAccount,
        Action onFixedAsset,
        Action onEmployee,
        Action<string> otherwise)
    {
        if (this == GlAccount) onGlAccount();
        else if (this == Customer) onCustomer();
        else if (this == Vendor) onVendor();
        else if (this == BankAccount) onBankAccount();
        else if (this == FixedAsset) onFixedAsset();
        else if (this == Employee) onEmployee();
        else otherwise(Value);
    }
}
