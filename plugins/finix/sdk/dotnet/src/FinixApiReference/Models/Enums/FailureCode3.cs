using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The error code when the <c>Funding Transfer Attempt</c> fails.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FailureCode3>))]
public sealed record FailureCode3 : OpenStringEnum<FailureCode3>
{
    private FailureCode3(string value) : base(value)
    {
    }

    public static readonly FailureCode3 BalanceAccountNotFound = new("BALANCE_ACCOUNT_NOT_FOUND");

    public static readonly FailureCode3 BalanceValidationFailed = new("BALANCE_VALIDATION_FAILED");

    public static readonly FailureCode3 InsufficientBalance = new("INSUFFICIENT_BALANCE");

    public static readonly FailureCode3 InvalidBalanceAccount = new("INVALID_BALANCE_ACCOUNT");

    public static readonly FailureCode3 VelocityLimitExceeded = new("VELOCITY_LIMIT_EXCEEDED");

    public static readonly FailureCode3 VelocityRuleNotFound = new("VELOCITY_RULE_NOT_FOUND");

    public static readonly FailureCode3 VelocityValidationFailed = new("VELOCITY_VALIDATION_FAILED");

    public TResult Match<TResult>(Func<TResult> onBalanceAccountNotFound,
        Func<TResult> onBalanceValidationFailed,
        Func<TResult> onInsufficientBalance,
        Func<TResult> onInvalidBalanceAccount,
        Func<TResult> onVelocityLimitExceeded,
        Func<TResult> onVelocityRuleNotFound,
        Func<TResult> onVelocityValidationFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BalanceAccountNotFound => onBalanceAccountNotFound(),
            _ when this == BalanceValidationFailed => onBalanceValidationFailed(),
            _ when this == InsufficientBalance => onInsufficientBalance(),
            _ when this == InvalidBalanceAccount => onInvalidBalanceAccount(),
            _ when this == VelocityLimitExceeded => onVelocityLimitExceeded(),
            _ when this == VelocityRuleNotFound => onVelocityRuleNotFound(),
            _ when this == VelocityValidationFailed => onVelocityValidationFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onBalanceAccountNotFound,
        Action onBalanceValidationFailed,
        Action onInsufficientBalance,
        Action onInvalidBalanceAccount,
        Action onVelocityLimitExceeded,
        Action onVelocityRuleNotFound,
        Action onVelocityValidationFailed,
        Action<string> otherwise)
    {
        if (this == BalanceAccountNotFound) onBalanceAccountNotFound();
        else if (this == BalanceValidationFailed) onBalanceValidationFailed();
        else if (this == InsufficientBalance) onInsufficientBalance();
        else if (this == InvalidBalanceAccount) onInvalidBalanceAccount();
        else if (this == VelocityLimitExceeded) onVelocityLimitExceeded();
        else if (this == VelocityRuleNotFound) onVelocityRuleNotFound();
        else if (this == VelocityValidationFailed) onVelocityValidationFailed();
        else otherwise(Value);
    }
}
