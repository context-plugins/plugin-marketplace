using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget35>))]
public sealed record XAmzTarget35 : OpenStringEnum<XAmzTarget35>
{
    private XAmzTarget35(string value) : base(value)
    {
    }

    public static readonly XAmzTarget35 CodeBuild20161006ListSharedProjects = new(
        "CodeBuild_20161006.ListSharedProjects");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListSharedProjects,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListSharedProjects => onCodeBuild20161006ListSharedProjects(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListSharedProjects, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListSharedProjects) onCodeBuild20161006ListSharedProjects();
        else otherwise(Value);
    }
}
