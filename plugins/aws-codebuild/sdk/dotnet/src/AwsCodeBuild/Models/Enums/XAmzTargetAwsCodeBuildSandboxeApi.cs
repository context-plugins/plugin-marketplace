using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildSandboxeApi>))]
public sealed record XAmzTargetAwsCodeBuildSandboxeApi : OpenStringEnum<XAmzTargetAwsCodeBuildSandboxeApi>
{
    private XAmzTargetAwsCodeBuildSandboxeApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildSandboxeApi CodeBuild20161006BatchGetSandboxes = new(
        "CodeBuild_20161006.BatchGetSandboxes");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetSandboxes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetSandboxes => onCodeBuild20161006BatchGetSandboxes(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetSandboxes, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetSandboxes) onCodeBuild20161006BatchGetSandboxes();
        else otherwise(Value);
    }
}
