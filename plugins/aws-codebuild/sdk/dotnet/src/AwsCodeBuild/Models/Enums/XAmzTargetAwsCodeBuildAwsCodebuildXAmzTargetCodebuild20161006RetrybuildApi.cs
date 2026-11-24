using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>))]
public sealed record XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi : OpenStringEnum<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>
{
    private XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi CodeBuild20161006RetryBuild = new(
        "CodeBuild_20161006.RetryBuild");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006RetryBuild, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006RetryBuild => onCodeBuild20161006RetryBuild(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006RetryBuild, Action<string> otherwise)
    {
        if (this == CodeBuild20161006RetryBuild) onCodeBuild20161006RetryBuild();
        else otherwise(Value);
    }
}
