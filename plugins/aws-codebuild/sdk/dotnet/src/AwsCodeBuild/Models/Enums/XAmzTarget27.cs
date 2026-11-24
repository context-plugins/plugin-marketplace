using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget27>))]
public sealed record XAmzTarget27 : OpenStringEnum<XAmzTarget27>
{
    private XAmzTarget27(string value) : base(value)
    {
    }

    public static readonly XAmzTarget27 CodeBuild20161006ImportSourceCredentials = new(
        "CodeBuild_20161006.ImportSourceCredentials");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ImportSourceCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ImportSourceCredentials => onCodeBuild20161006ImportSourceCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ImportSourceCredentials, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ImportSourceCredentials) onCodeBuild20161006ImportSourceCredentials();
        else otherwise(Value);
    }
}
