using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget23>))]
public sealed record XAmzTarget23 : OpenStringEnum<XAmzTarget23>
{
    private XAmzTarget23(string value) : base(value)
    {
    }

    public static readonly XAmzTarget23 CodeBuild20161006DeleteResourcePolicy = new(
        "CodeBuild_20161006.DeleteResourcePolicy");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteResourcePolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteResourcePolicy => onCodeBuild20161006DeleteResourcePolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteResourcePolicy, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteResourcePolicy) onCodeBuild20161006DeleteResourcePolicy();
        else otherwise(Value);
    }
}
