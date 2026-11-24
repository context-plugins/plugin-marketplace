using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi CodeBuild20161006BatchDeleteBuilds = new(
        "CodeBuild_20161006.BatchDeleteBuilds");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchDeleteBuilds,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchDeleteBuilds => onCodeBuild20161006BatchDeleteBuilds(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchDeleteBuilds, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchDeleteBuilds) onCodeBuild20161006BatchDeleteBuilds();
        else otherwise(Value);
    }
}
