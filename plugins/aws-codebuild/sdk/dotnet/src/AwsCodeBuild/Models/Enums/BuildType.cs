using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available for NO_SOURCE source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see Tutorial: Configure a CodeBuild-hosted Buildkite runner in the CodeBuild user guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BuildType>))]
public sealed record BuildType : OpenStringEnum<BuildType>
{
    private BuildType(string value) : base(value)
    {
    }

    public static readonly BuildType Build = new("BUILD");

    public static readonly BuildType BuildBatch = new("BUILD_BATCH");

    public static readonly BuildType RunnerBuildkiteBuild = new("RUNNER_BUILDKITE_BUILD");

    public TResult Match<TResult>(Func<TResult> onBuild,
        Func<TResult> onBuildBatch,
        Func<TResult> onRunnerBuildkiteBuild,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Build => onBuild(),
            _ when this == BuildBatch => onBuildBatch(),
            _ when this == RunnerBuildkiteBuild => onRunnerBuildkiteBuild(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuild, Action onBuildBatch, Action onRunnerBuildkiteBuild, Action<string> otherwise)
    {
        if (this == Build) onBuild();
        else if (this == BuildBatch) onBuildBatch();
        else if (this == RunnerBuildkiteBuild) onRunnerBuildkiteBuild();
        else otherwise(Value);
    }
}
