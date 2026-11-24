using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCodeBuildProjectsApi>))]
public sealed record XAmzTarget3AwsCodeBuildProjectsApi : OpenStringEnum<XAmzTarget3AwsCodeBuildProjectsApi>
{
    private XAmzTarget3AwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCodeBuildProjectsApi CodeBuild20161006ListProjects = new(
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
