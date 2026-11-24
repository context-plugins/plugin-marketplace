using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of build output artifact. Valid values include: CODEPIPELINE: The build project has build output generated through CodePipeline. The CODEPIPELINE type is not supported for secondaryArtifacts. NO_ARTIFACTS: The build project does not produce any build output. S3: The build project stores build output in Amazon S3.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2AwsCodeBuildProjectsApi>))]
public sealed record Type2AwsCodeBuildProjectsApi : OpenStringEnum<Type2AwsCodeBuildProjectsApi>
{
    private Type2AwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly Type2AwsCodeBuildProjectsApi Codepipeline = new("CODEPIPELINE");

    public static readonly Type2AwsCodeBuildProjectsApi S3 = new("S3");

    public static readonly Type2AwsCodeBuildProjectsApi NoArtifacts = new("NO_ARTIFACTS");

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
