using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCodeBuildBuildsApi>))]
public sealed record XAmzTarget3AwsCodeBuildBuildsApi : OpenStringEnum<XAmzTarget3AwsCodeBuildBuildsApi>
{
    private XAmzTarget3AwsCodeBuildBuildsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCodeBuildBuildsApi CodeBuild20161006ListBuildsForProject = new(
        "CodeBuild_20161006.ListBuildsForProject");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListBuildsForProject,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListBuildsForProject => onCodeBuild20161006ListBuildsForProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListBuildsForProject, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListBuildsForProject) onCodeBuild20161006ListBuildsForProject();
        else otherwise(Value);
    }
}
