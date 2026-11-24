using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

/// <summary>
/// The reason for the exception.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason UnauthorizedAccount = new("UNAUTHORIZED_ACCOUNT");

    public static readonly Reason DependencyAccessDenied = new("DEPENDENCY_ACCESS_DENIED");

    public TResult Match<TResult>(Func<TResult> onUnauthorizedAccount,
        Func<TResult> onDependencyAccessDenied,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UnauthorizedAccount => onUnauthorizedAccount(),
            _ when this == DependencyAccessDenied => onDependencyAccessDenied(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnauthorizedAccount, Action onDependencyAccessDenied, Action<string> otherwise)
    {
        if (this == UnauthorizedAccount) onUnauthorizedAccount();
        else if (this == DependencyAccessDenied) onDependencyAccessDenied();
        else otherwise(Value);
    }
}
