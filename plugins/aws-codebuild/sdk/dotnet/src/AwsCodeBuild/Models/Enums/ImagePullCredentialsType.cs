using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of credentials CodeBuild uses to pull images in your build. There are two valid values: CODEBUILD specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild service principal. SERVICE_ROLE specifies that CodeBuild uses your build project's service role. When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an CodeBuild curated image, you must use CODEBUILD credentials.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ImagePullCredentialsType>))]
public sealed record ImagePullCredentialsType : OpenStringEnum<ImagePullCredentialsType>
{
    private ImagePullCredentialsType(string value) : base(value)
    {
    }

    public static readonly ImagePullCredentialsType Codebuild = new("CODEBUILD");

    public static readonly ImagePullCredentialsType ServiceRole = new("SERVICE_ROLE");

    public TResult Match<TResult>(Func<TResult> onCodebuild,
        Func<TResult> onServiceRole,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Codebuild => onCodebuild(),
            _ when this == ServiceRole => onServiceRole(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodebuild, Action onServiceRole, Action<string> otherwise)
    {
        if (this == Codebuild) onCodebuild();
        else if (this == ServiceRole) onServiceRole();
        else otherwise(Value);
    }
}
