using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// ProgramNetworkType enum for Spend \&amp; Expense Transactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProgramNetworkType>))]
public sealed record ProgramNetworkType : OpenStringEnum<ProgramNetworkType>
{
    private ProgramNetworkType(string value) : base(value)
    {
    }

    public static readonly ProgramNetworkType Visa = new("VISA");

    public static readonly ProgramNetworkType Mastercard = new("MASTERCARD");

    public TResult Match<TResult>(Func<TResult> onVisa, Func<TResult> onMastercard, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Visa => onVisa(),
            _ when this == Mastercard => onMastercard(),
            _ => otherwise(Value)
        };

    public void Match(Action onVisa, Action onMastercard, Action<string> otherwise)
    {
        if (this == Visa) onVisa();
        else if (this == Mastercard) onMastercard();
        else otherwise(Value);
    }
}
