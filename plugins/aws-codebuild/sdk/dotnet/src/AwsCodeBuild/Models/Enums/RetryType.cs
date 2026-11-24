using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies the type of retry to perform.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RetryType>))]
public sealed record RetryType : OpenStringEnum<RetryType>
{
    private RetryType(string value) : base(value)
    {
    }

    public static readonly RetryType RetryAllBuilds = new("RETRY_ALL_BUILDS");

    public static readonly RetryType RetryFailedBuilds = new("RETRY_FAILED_BUILDS");

    public TResult Match<TResult>(Func<TResult> onRetryAllBuilds,
        Func<TResult> onRetryFailedBuilds,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RetryAllBuilds => onRetryAllBuilds(),
            _ when this == RetryFailedBuilds => onRetryFailedBuilds(),
            _ => otherwise(Value)
        };

    public void Match(Action onRetryAllBuilds, Action onRetryFailedBuilds, Action<string> otherwise)
    {
        if (this == RetryAllBuilds) onRetryAllBuilds();
        else if (this == RetryFailedBuilds) onRetryFailedBuilds();
        else otherwise(Value);
    }
}
