using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildCommandExecutionApi>))]
public sealed record XAmzTargetAwsCodeBuildCommandExecutionApi : OpenStringEnum<XAmzTargetAwsCodeBuildCommandExecutionApi>
{
    private XAmzTargetAwsCodeBuildCommandExecutionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildCommandExecutionApi CodeBuild20161006BatchGetCommandExecutions = new(
        "CodeBuild_20161006.BatchGetCommandExecutions");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetCommandExecutions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetCommandExecutions => onCodeBuild20161006BatchGetCommandExecutions(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetCommandExecutions, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetCommandExecutions) onCodeBuild20161006BatchGetCommandExecutions();
        else otherwise(Value);
    }
}
