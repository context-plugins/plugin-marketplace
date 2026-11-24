using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi>))]
public sealed record XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi : OpenStringEnum<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi>
{
    private XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi CodeBuild20161006ListBuilds = new(
        "CodeBuild_20161006.ListBuilds");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListBuilds, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListBuilds => onCodeBuild20161006ListBuilds(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListBuilds, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListBuilds) onCodeBuild20161006ListBuilds();
        else otherwise(Value);
    }
}
