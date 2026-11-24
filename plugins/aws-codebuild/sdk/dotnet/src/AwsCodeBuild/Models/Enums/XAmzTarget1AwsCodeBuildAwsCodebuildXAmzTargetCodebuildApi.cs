using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi CodeBuild20161006BatchGetBuilds = new(
        "CodeBuild_20161006.BatchGetBuilds");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetBuilds, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetBuilds => onCodeBuild20161006BatchGetBuilds(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetBuilds, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetBuilds) onCodeBuild20161006BatchGetBuilds();
        else otherwise(Value);
    }
}
