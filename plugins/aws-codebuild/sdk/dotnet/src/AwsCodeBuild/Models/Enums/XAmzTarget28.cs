using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget28>))]
public sealed record XAmzTarget28 : OpenStringEnum<XAmzTarget28>
{
    private XAmzTarget28(string value) : base(value)
    {
    }

    public static readonly XAmzTarget28 CodeBuild20161006ListSourceCredentials = new(
        "CodeBuild_20161006.ListSourceCredentials");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListSourceCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListSourceCredentials => onCodeBuild20161006ListSourceCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListSourceCredentials, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListSourceCredentials) onCodeBuild20161006ListSourceCredentials();
        else otherwise(Value);
    }
}
