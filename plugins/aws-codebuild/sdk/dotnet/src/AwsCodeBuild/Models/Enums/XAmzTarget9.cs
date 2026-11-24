using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 CodeBuild20161006UpdateProject = new("CodeBuild_20161006.UpdateProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006UpdateProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006UpdateProject => onCodeBuild20161006UpdateProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006UpdateProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006UpdateProject) onCodeBuild20161006UpdateProject();
        else otherwise(Value);
    }
}
