using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget26>))]
public sealed record XAmzTarget26 : OpenStringEnum<XAmzTarget26>
{
    private XAmzTarget26(string value) : base(value)
    {
    }

    public static readonly XAmzTarget26 CodeBuild20161006DeleteSourceCredentials = new(
        "CodeBuild_20161006.DeleteSourceCredentials");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteSourceCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteSourceCredentials => onCodeBuild20161006DeleteSourceCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteSourceCredentials, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteSourceCredentials) onCodeBuild20161006DeleteSourceCredentials();
        else otherwise(Value);
    }
}
