using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsCodeBuildProjectsApi>))]
public sealed record XAmzTarget4AwsCodeBuildProjectsApi : OpenStringEnum<XAmzTarget4AwsCodeBuildProjectsApi>
{
    private XAmzTarget4AwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsCodeBuildProjectsApi CodeBuild20161006UpdateProject = new(
        "CodeBuild_20161006.UpdateProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006UpdateProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006UpdateProject => onCodeBuild20161006UpdateProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006UpdateProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006UpdateProject) onCodeBuild20161006UpdateProject();
        else otherwise(Value);
    }
}
