using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget37>))]
public sealed record XAmzTarget37 : OpenStringEnum<XAmzTarget37>
{
    private XAmzTarget37(string value) : base(value)
    {
    }

    public static readonly XAmzTarget37 CodeBuild20161006UpdateProjectVisibility = new(
        "CodeBuild_20161006.UpdateProjectVisibility");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006UpdateProjectVisibility,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006UpdateProjectVisibility => onCodeBuild20161006UpdateProjectVisibility(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006UpdateProjectVisibility, Action<string> otherwise)
    {
        if (this == CodeBuild20161006UpdateProjectVisibility) onCodeBuild20161006UpdateProjectVisibility();
        else otherwise(Value);
    }
}
