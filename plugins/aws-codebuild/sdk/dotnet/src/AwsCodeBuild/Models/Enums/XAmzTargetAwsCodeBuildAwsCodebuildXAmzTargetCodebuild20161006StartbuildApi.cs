using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi>))]
public sealed record XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi : OpenStringEnum<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi>
{
    private XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi CodeBuild20161006StartBuild = new(
        "CodeBuild_20161006.StartBuild");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StartBuild, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StartBuild => onCodeBuild20161006StartBuild(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StartBuild, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StartBuild) onCodeBuild20161006StartBuild();
        else otherwise(Value);
    }
}
