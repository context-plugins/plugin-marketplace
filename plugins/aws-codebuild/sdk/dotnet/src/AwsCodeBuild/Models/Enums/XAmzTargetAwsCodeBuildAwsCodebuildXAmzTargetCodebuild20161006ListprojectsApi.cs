using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi>))]
public sealed record XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi : OpenStringEnum<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi>
{
    private XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi CodeBuild20161006ListProjects = new(
        "CodeBuild_20161006.ListProjects");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListProjects, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListProjects => onCodeBuild20161006ListProjects(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListProjects, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListProjects) onCodeBuild20161006ListProjects();
        else otherwise(Value);
    }
}
