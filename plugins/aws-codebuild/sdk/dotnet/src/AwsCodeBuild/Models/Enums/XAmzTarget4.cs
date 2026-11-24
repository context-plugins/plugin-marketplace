using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 CodeBuild20161006ListBuildBatches = new("CodeBuild_20161006.ListBuildBatches");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListBuildBatches, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListBuildBatches => onCodeBuild20161006ListBuildBatches(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListBuildBatches, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListBuildBatches) onCodeBuild20161006ListBuildBatches();
        else otherwise(Value);
    }
}
