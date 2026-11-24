using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The state of the report. May be set to PENDING and later updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResultBitbucketReportsApi>))]
public sealed record ResultBitbucketReportsApi : OpenStringEnum<ResultBitbucketReportsApi>
{
    private ResultBitbucketReportsApi(string value) : base(value)
    {
    }

    public static readonly ResultBitbucketReportsApi Passed = new("PASSED");

    public static readonly ResultBitbucketReportsApi Failed = new("FAILED");

    public static readonly ResultBitbucketReportsApi Skipped = new("SKIPPED");

    public static readonly ResultBitbucketReportsApi Ignored = new("IGNORED");

    public TResult Match<TResult>(Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onSkipped,
        Func<TResult> onIgnored,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Skipped => onSkipped(),
            _ when this == Ignored => onIgnored(),
            _ => otherwise(Value)
        };

    public void Match(Action onPassed, Action onFailed, Action onSkipped, Action onIgnored, Action<string> otherwise)
    {
        if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Skipped) onSkipped();
        else if (this == Ignored) onIgnored();
        else otherwise(Value);
    }
}
