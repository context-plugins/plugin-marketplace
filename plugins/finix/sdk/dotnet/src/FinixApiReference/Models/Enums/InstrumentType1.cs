using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Payment Instrument</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InstrumentType1>))]
public sealed record InstrumentType1 : OpenStringEnum<InstrumentType1>
{
    private InstrumentType1(string value) : base(value)
    {
    }

    public static readonly InstrumentType1 BankAccount = new("BANK_ACCOUNT");

    public TResult Match<TResult>(Func<TResult> onBankAccount, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccount => onBankAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccount, Action<string> otherwise)
    {
        if (this == BankAccount) onBankAccount();
        else otherwise(Value);
    }
}
