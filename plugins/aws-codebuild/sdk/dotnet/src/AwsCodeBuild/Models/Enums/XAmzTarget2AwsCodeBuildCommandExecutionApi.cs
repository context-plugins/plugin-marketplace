using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCodeBuildCommandExecutionApi>))]
public sealed record XAmzTarget2AwsCodeBuildCommandExecutionApi : OpenStringEnum<XAmzTarget2AwsCodeBuildCommandExecutionApi>
{
    private XAmzTarget2AwsCodeBuildCommandExecutionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCodeBuildCommandExecutionApi CodeBuild20161006StartCommandExecution = new(
        "CodeBuild_20161006.StartCommandExecution");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StartCommandExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StartCommandExecution => onCodeBuild20161006StartCommandExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StartCommandExecution, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StartCommandExecution) onCodeBuild20161006StartCommandExecution();
        else otherwise(Value);
    }
}
