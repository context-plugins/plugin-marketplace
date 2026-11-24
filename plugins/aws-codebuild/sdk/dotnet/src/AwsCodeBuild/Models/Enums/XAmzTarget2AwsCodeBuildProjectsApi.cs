using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCodeBuildProjectsApi>))]
public sealed record XAmzTarget2AwsCodeBuildProjectsApi : OpenStringEnum<XAmzTarget2AwsCodeBuildProjectsApi>
{
    private XAmzTarget2AwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCodeBuildProjectsApi CodeBuild20161006DeleteProject = new(
        "CodeBuild_20161006.DeleteProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteProject => onCodeBuild20161006DeleteProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteProject) onCodeBuild20161006DeleteProject();
        else otherwise(Value);
    }
}
