using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The status of the build group. FAILED The build group failed. FAULT The build group faulted. IN_PROGRESS The build group is still in progress. STOPPED The build group stopped. SUCCEEDED The build group succeeded. TIMED_OUT The build group timed out.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Succeeded = new("SUCCEEDED");

    public static readonly BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Failed = new("FAILED");

    public static readonly BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Fault = new("FAULT");

    public static readonly BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi TimedOut = new("TIMED_OUT");

    public static readonly BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi InProgress = new("IN_PROGRESS");

    public static readonly BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Stopped = new("STOPPED");

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
