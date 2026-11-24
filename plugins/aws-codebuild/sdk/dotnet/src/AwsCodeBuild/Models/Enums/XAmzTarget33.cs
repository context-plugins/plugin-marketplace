using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget33>))]
public sealed record XAmzTarget33 : OpenStringEnum<XAmzTarget33>
{
    private XAmzTarget33(string value) : base(value)
    {
    }

    public static readonly XAmzTarget33 CodeBuild20161006RetryBuildBatch = new("CodeBuild_20161006.RetryBuildBatch");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006RetryBuildBatch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006RetryBuildBatch => onCodeBuild20161006RetryBuildBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006RetryBuildBatch, Action<string> otherwise)
    {
        if (this == CodeBuild20161006RetryBuildBatch) onCodeBuild20161006RetryBuildBatch();
        else otherwise(Value);
    }
}
