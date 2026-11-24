using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCodeBuildProjectsApi>))]
public sealed record XAmzTarget1AwsCodeBuildProjectsApi : OpenStringEnum<XAmzTarget1AwsCodeBuildProjectsApi>
{
    private XAmzTarget1AwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCodeBuildProjectsApi CodeBuild20161006CreateProject = new(
        "CodeBuild_20161006.CreateProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006CreateProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006CreateProject => onCodeBuild20161006CreateProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006CreateProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006CreateProject) onCodeBuild20161006CreateProject();
        else otherwise(Value);
    }
}
