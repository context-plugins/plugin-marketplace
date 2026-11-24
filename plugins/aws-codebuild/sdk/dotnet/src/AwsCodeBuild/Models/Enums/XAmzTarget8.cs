using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 CodeBuild20161006DeleteProject = new("CodeBuild_20161006.DeleteProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteProject => onCodeBuild20161006DeleteProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteProject) onCodeBuild20161006DeleteProject();
        else otherwise(Value);
    }
}
