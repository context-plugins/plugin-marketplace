using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The migration result status for the database. This is only set if the migration is not a dry run.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResultStatus>))]
public sealed record ResultStatus : OpenStringEnum<ResultStatus>
{
    private ResultStatus(string value) : base(value)
    {
    }

    public static readonly ResultStatus StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly ResultStatus Succeeded = new("SUCCEEDED");

    public static readonly ResultStatus Failed = new("FAILED");

    public static readonly ResultStatus Skipped = new("SKIPPED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onSucceeded,
        Action onFailed,
        Action onSkipped,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
