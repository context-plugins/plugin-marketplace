using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 CodeBuild20161006ListBuildBatchesForProject = new(
        "CodeBuild_20161006.ListBuildBatchesForProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListBuildBatchesForProject,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CodeBuild20161006ListBuildBatchesForProject => onCodeBuild20161006ListBuildBatchesForProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListBuildBatchesForProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListBuildBatchesForProject) onCodeBuild20161006ListBuildBatchesForProject();
        else otherwise(Value);
    }
}
