using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21>))]
public sealed record XAmzTarget21 : OpenStringEnum<XAmzTarget21>
{
    private XAmzTarget21(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21 CodeBuild20161006StartBuildBatch = new("CodeBuild_20161006.StartBuildBatch");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StartBuildBatch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StartBuildBatch => onCodeBuild20161006StartBuildBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StartBuildBatch, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StartBuildBatch) onCodeBuild20161006StartBuildBatch();
        else otherwise(Value);
    }
}
