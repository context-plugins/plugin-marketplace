using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The name of the batch build phase. Valid values include: COMBINE_ARTIFACTS Build output artifacts are being combined and uploaded to the output location. DOWNLOAD_BATCHSPEC The batch build specification is being downloaded. FAILED One or more of the builds failed. IN_PROGRESS The batch build is in progress. STOPPED The batch build was stopped. SUBMITTED The btach build has been submitted. SUCCEEDED The batch build succeeded.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Submitted = new("SUBMITTED");

    public static readonly PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi DownloadBatchspec = new(
        "DOWNLOAD_BATCHSPEC");

    public static readonly PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi InProgress = new("IN_PROGRESS");

    public static readonly PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi CombineArtifacts = new(
        "COMBINE_ARTIFACTS");

    public static readonly PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Succeeded = new("SUCCEEDED");

    public static readonly PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Failed = new("FAILED");

    public static readonly PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Stopped = new("STOPPED");

    public TResult Match<TResult>(Func<TResult> onSubmitted,
        Func<TResult> onDownloadBatchspec,
        Func<TResult> onInProgress,
        Func<TResult> onCombineArtifacts,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Submitted => onSubmitted(),
            _ when this == DownloadBatchspec => onDownloadBatchspec(),
            _ when this == InProgress => onInProgress(),
            _ when this == CombineArtifacts => onCombineArtifacts(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubmitted,
        Action onDownloadBatchspec,
        Action onInProgress,
        Action onCombineArtifacts,
        Action onSucceeded,
        Action onFailed,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Submitted) onSubmitted();
        else if (this == DownloadBatchspec) onDownloadBatchspec();
        else if (this == InProgress) onInProgress();
        else if (this == CombineArtifacts) onCombineArtifacts();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
