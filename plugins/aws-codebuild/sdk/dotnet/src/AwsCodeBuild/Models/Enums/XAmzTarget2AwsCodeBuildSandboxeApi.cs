using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCodeBuildSandboxeApi>))]
public sealed record XAmzTarget2AwsCodeBuildSandboxeApi : OpenStringEnum<XAmzTarget2AwsCodeBuildSandboxeApi>
{
    private XAmzTarget2AwsCodeBuildSandboxeApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCodeBuildSandboxeApi CodeBuild20161006ListSandboxesForProject = new(
        "CodeBuild_20161006.ListSandboxesForProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListSandboxesForProject,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListSandboxesForProject => onCodeBuild20161006ListSandboxesForProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListSandboxesForProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListSandboxesForProject) onCodeBuild20161006ListSandboxesForProject();
        else otherwise(Value);
    }
}
