using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi CodeBuild20161006ListBuildsForProject = new(
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
