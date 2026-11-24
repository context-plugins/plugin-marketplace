using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget25>))]
public sealed record XAmzTarget25 : OpenStringEnum<XAmzTarget25>
{
    private XAmzTarget25(string value) : base(value)
    {
    }

    public static readonly XAmzTarget25 CodeBuild20161006PutResourcePolicy = new(
        "CodeBuild_20161006.PutResourcePolicy");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006PutResourcePolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006PutResourcePolicy => onCodeBuild20161006PutResourcePolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006PutResourcePolicy, Action<string> otherwise)
    {
        if (this == CodeBuild20161006PutResourcePolicy) onCodeBuild20161006PutResourcePolicy();
        else otherwise(Value);
    }
}
