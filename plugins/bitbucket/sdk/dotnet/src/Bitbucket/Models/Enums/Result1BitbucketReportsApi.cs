using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The state of the report. May be set to PENDING and later updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Result1BitbucketReportsApi>))]
public sealed record Result1BitbucketReportsApi : OpenStringEnum<Result1BitbucketReportsApi>
{
    private Result1BitbucketReportsApi(string value) : base(value)
    {
    }

    public static readonly Result1BitbucketReportsApi Passed = new("PASSED");

    public static readonly Result1BitbucketReportsApi Failed = new("FAILED");

    public static readonly Result1BitbucketReportsApi Pending = new("PENDING");

    public TResult Match<TResult>(Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onPassed, Action onFailed, Action onPending, Action<string> otherwise)
    {
        if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else otherwise(Value);
    }
}
