using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 CodeBuild20161006BatchGetBuildBatches = new(
        "CodeBuild_20161006.BatchGetBuildBatches");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetBuildBatches,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetBuildBatches => onCodeBuild20161006BatchGetBuildBatches(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetBuildBatches, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetBuildBatches) onCodeBuild20161006BatchGetBuildBatches();
        else otherwise(Value);
    }
}
