using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildProjectsApi>))]
public sealed record XAmzTargetAwsCodeBuildProjectsApi : OpenStringEnum<XAmzTargetAwsCodeBuildProjectsApi>
{
    private XAmzTargetAwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildProjectsApi CodeBuild20161006BatchGetProjects = new(
        "CodeBuild_20161006.BatchGetProjects");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetProjects, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetProjects => onCodeBuild20161006BatchGetProjects(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetProjects, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetProjects) onCodeBuild20161006BatchGetProjects();
        else otherwise(Value);
    }
}
