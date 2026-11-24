using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

/// <summary>
/// The reason for the exception.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason1>))]
public sealed record Reason1 : OpenStringEnum<Reason1>
{
    private Reason1(string value) : base(value)
    {
    }

    public static readonly Reason1 AccountThrottled = new("ACCOUNT_THROTTLED");

    public static readonly Reason1 DependencyRequestThrottled = new("DEPENDENCY_REQUEST_THROTTLED");

    public static readonly Reason1 ResourceLevelThrottle = new("RESOURCE_LEVEL_THROTTLE");

    public TResult Match<TResult>(Func<TResult> onAccountThrottled,
        Func<TResult> onDependencyRequestThrottled,
        Func<TResult> onResourceLevelThrottle,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AccountThrottled => onAccountThrottled(),
            _ when this == DependencyRequestThrottled => onDependencyRequestThrottled(),
            _ when this == ResourceLevelThrottle => onResourceLevelThrottle(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccountThrottled,
        Action onDependencyRequestThrottled,
        Action onResourceLevelThrottle,
        Action<string> otherwise)
    {
        if (this == AccountThrottled) onAccountThrottled();
        else if (this == DependencyRequestThrottled) onDependencyRequestThrottled();
        else if (this == ResourceLevelThrottle) onResourceLevelThrottle();
        else otherwise(Value);
    }
}
