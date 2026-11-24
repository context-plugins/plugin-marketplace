using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCodeBuildSandboxeApi>))]
public sealed record XAmzTarget1AwsCodeBuildSandboxeApi : OpenStringEnum<XAmzTarget1AwsCodeBuildSandboxeApi>
{
    private XAmzTarget1AwsCodeBuildSandboxeApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCodeBuildSandboxeApi CodeBuild20161006ListSandboxes = new(
        "CodeBuild_20161006.ListSandboxes");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListSandboxes, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListSandboxes => onCodeBuild20161006ListSandboxes(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListSandboxes, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListSandboxes) onCodeBuild20161006ListSandboxes();
        else otherwise(Value);
    }
}
