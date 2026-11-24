using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCodeBuildCommandExecutionApi>))]
public sealed record XAmzTarget1AwsCodeBuildCommandExecutionApi : OpenStringEnum<XAmzTarget1AwsCodeBuildCommandExecutionApi>
{
    private XAmzTarget1AwsCodeBuildCommandExecutionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCodeBuildCommandExecutionApi CodeBuild20161006ListCommandExecutionsForSandbox = new(
        "CodeBuild_20161006.ListCommandExecutionsForSandbox");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListCommandExecutionsForSandbox,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CodeBuild20161006ListCommandExecutionsForSandbox => onCodeBuild20161006ListCommandExecutionsForSandbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListCommandExecutionsForSandbox, Action<string> otherwise)
    {
        if (this ==
            CodeBuild20161006ListCommandExecutionsForSandbox) onCodeBuild20161006ListCommandExecutionsForSandbox();
        else otherwise(Value);
    }
}
