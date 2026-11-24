using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies the type of artifact.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Codepipeline = new("CODEPIPELINE");

    public static readonly Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi S3 = new("S3");

    public static readonly Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi NoArtifacts = new("NO_ARTIFACTS");

    public TResult Match<TResult>(Func<TResult> onCodepipeline,
        Func<TResult> onS3,
        Func<TResult> onNoArtifacts,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Codepipeline => onCodepipeline(),
            _ when this == S3 => onS3(),
            _ when this == NoArtifacts => onNoArtifacts(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodepipeline, Action onS3, Action onNoArtifacts, Action<string> otherwise)
    {
        if (this == Codepipeline) onCodepipeline();
        else if (this == S3) onS3();
        else if (this == NoArtifacts) onNoArtifacts();
        else otherwise(Value);
    }
}
