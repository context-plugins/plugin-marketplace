using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PaymentMethodUsBankAccountAccountType>))]
public sealed record PaymentMethodUsBankAccountAccountType : OpenStringEnum<PaymentMethodUsBankAccountAccountType>
{
    private PaymentMethodUsBankAccountAccountType(string value) : base(value)
    {
    }

    public static readonly PaymentMethodUsBankAccountAccountType Checking = new("checking");

    public static readonly PaymentMethodUsBankAccountAccountType Savings = new("savings");

    public TResult Match<TResult>(Func<TResult> onChecking, Func<TResult> onSavings, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Checking => onChecking(),
            _ when this == Savings => onSavings(),
            _ => otherwise(Value)
        };

    public void Match(Action onChecking, Action onSavings, Action<string> otherwise)
    {
        if (this == Checking) onChecking();
        else if (this == Savings) onSavings();
        else otherwise(Value);
    }
}
