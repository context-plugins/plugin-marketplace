using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AwsCodeBuildBuildsApi>))]
public sealed record XAmzTarget5AwsCodeBuildBuildsApi : OpenStringEnum<XAmzTarget5AwsCodeBuildBuildsApi>
{
    private XAmzTarget5AwsCodeBuildBuildsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AwsCodeBuildBuildsApi CodeBuild20161006StopBuild = new(
        "CodeBuild_20161006.StopBuild");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StopBuild, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StopBuild => onCodeBuild20161006StopBuild(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StopBuild, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StopBuild) onCodeBuild20161006StopBuild();
        else otherwise(Value);
    }
}
