using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

/// <summary>
/// The reason for the exception.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason3>))]
public sealed record Reason3 : OpenStringEnum<Reason3>
{
    private Reason3(string value) : base(value)
    {
    }

    public static readonly Reason3 DependencyServiceQuotaExceeded = new("DEPENDENCY_SERVICE_QUOTA_EXCEEDED");

    public TResult Match<TResult>(Func<TResult> onDependencyServiceQuotaExceeded, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DependencyServiceQuotaExceeded => onDependencyServiceQuotaExceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onDependencyServiceQuotaExceeded, Action<string> otherwise)
    {
        if (this == DependencyServiceQuotaExceeded) onDependencyServiceQuotaExceeded();
        else otherwise(Value);
    }
}
