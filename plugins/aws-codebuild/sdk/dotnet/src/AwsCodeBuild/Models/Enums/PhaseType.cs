using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The name of the build phase. Valid values include: BUILD Core build activities typically occur in this build phase. COMPLETED The build has been completed. DOWNLOAD_SOURCE Source code is being downloaded in this build phase. FINALIZING The build process is completing in this build phase. INSTALL Installation activities typically occur in this build phase. POST_BUILD Post-build activities typically occur in this build phase. PRE_BUILD Pre-build activities typically occur in this build phase. PROVISIONING The build environment is being set up. QUEUED The build has been submitted and is queued be
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PhaseType>))]
public sealed record PhaseType : OpenStringEnum<PhaseType>
{
    private PhaseType(string value) : base(value)
    {
    }

    public static readonly PhaseType Submitted = new("SUBMITTED");

    public static readonly PhaseType Queued = new("QUEUED");

    public static readonly PhaseType Provisioning = new("PROVISIONING");

    public static readonly PhaseType DownloadSource = new("DOWNLOAD_SOURCE");

    public static readonly PhaseType Install = new("INSTALL");

    public static readonly PhaseType PreBuild = new("PRE_BUILD");

    public static readonly PhaseType Build = new("BUILD");

    public static readonly PhaseType PostBuild = new("POST_BUILD");

    public static readonly PhaseType UploadArtifacts = new("UPLOAD_ARTIFACTS");

    public static readonly PhaseType Finalizing = new("FINALIZING");

    public static readonly PhaseType Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onSubmitted,
        Func<TResult> onQueued,
        Func<TResult> onProvisioning,
        Func<TResult> onDownloadSource,
        Func<TResult> onInstall,
        Func<TResult> onPreBuild,
        Func<TResult> onBuild,
        Func<TResult> onPostBuild,
        Func<TResult> onUploadArtifacts,
        Func<TResult> onFinalizing,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Submitted => onSubmitted(),
            _ when this == Queued => onQueued(),
            _ when this == Provisioning => onProvisioning(),
            _ when this == DownloadSource => onDownloadSource(),
            _ when this == Install => onInstall(),
            _ when this == PreBuild => onPreBuild(),
            _ when this == Build => onBuild(),
            _ when this == PostBuild => onPostBuild(),
            _ when this == UploadArtifacts => onUploadArtifacts(),
            _ when this == Finalizing => onFinalizing(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubmitted,
        Action onQueued,
        Action onProvisioning,
        Action onDownloadSource,
        Action onInstall,
        Action onPreBuild,
        Action onBuild,
        Action onPostBuild,
        Action onUploadArtifacts,
        Action onFinalizing,
        Action onCompleted,
        Action<string> otherwise)
    {
        if (this == Submitted) onSubmitted();
        else if (this == Queued) onQueued();
        else if (this == Provisioning) onProvisioning();
        else if (this == DownloadSource) onDownloadSource();
        else if (this == Install) onInstall();
        else if (this == PreBuild) onPreBuild();
        else if (this == Build) onBuild();
        else if (this == PostBuild) onPostBuild();
        else if (this == UploadArtifacts) onUploadArtifacts();
        else if (this == Finalizing) onFinalizing();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
