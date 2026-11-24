using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget22>))]
public sealed record XAmzTarget22 : OpenStringEnum<XAmzTarget22>
{
    private XAmzTarget22(string value) : base(value)
    {
    }

    public static readonly XAmzTarget22 CodeBuild20161006StopBuildBatch = new("CodeBuild_20161006.StopBuildBatch");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StopBuildBatch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StopBuildBatch => onCodeBuild20161006StopBuildBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StopBuildBatch, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StopBuildBatch) onCodeBuild20161006StopBuildBatch();
        else otherwise(Value);
    }
}
