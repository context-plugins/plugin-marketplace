using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The current status of the build phase. Valid values include: FAILED The build phase failed. FAULT The build phase faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build phase stopped. SUCCEEDED The build phase succeeded. TIMED_OUT The build phase timed out.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>))]
public sealed record PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi : OpenStringEnum<PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>
{
    private PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(string value) : base(value)
    {
    }

    public static readonly PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Succeeded = new(
        "SUCCEEDED");

    public static readonly PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Failed = new(
        "FAILED");

    public static readonly PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Fault = new(
        "FAULT");

    public static readonly PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi TimedOut = new(
        "TIMED_OUT");

    public static readonly PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi InProgress = new(
        "IN_PROGRESS");

    public static readonly PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Stopped = new(
        "STOPPED");

    public TResult Match<TResult>(Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onFault,
        Func<TResult> onTimedOut,
        Func<TResult> onInProgress,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Fault => onFault(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == InProgress => onInProgress(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded,
        Action onFailed,
        Action onFault,
        Action onTimedOut,
        Action onInProgress,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Fault) onFault();
        else if (this == TimedOut) onTimedOut();
        else if (this == InProgress) onInProgress();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
