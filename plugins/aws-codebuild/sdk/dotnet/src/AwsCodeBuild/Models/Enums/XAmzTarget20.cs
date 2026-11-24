using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20>))]
public sealed record XAmzTarget20 : OpenStringEnum<XAmzTarget20>
{
    private XAmzTarget20(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20 CodeBuild20161006DeleteBuildBatch = new("CodeBuild_20161006.DeleteBuildBatch");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteBuildBatch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteBuildBatch => onCodeBuild20161006DeleteBuildBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteBuildBatch, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteBuildBatch) onCodeBuild20161006DeleteBuildBatch();
        else otherwise(Value);
    }
}
