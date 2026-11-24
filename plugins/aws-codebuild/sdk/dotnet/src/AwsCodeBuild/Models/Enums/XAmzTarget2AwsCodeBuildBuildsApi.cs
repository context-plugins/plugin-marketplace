using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCodeBuildBuildsApi>))]
public sealed record XAmzTarget2AwsCodeBuildBuildsApi : OpenStringEnum<XAmzTarget2AwsCodeBuildBuildsApi>
{
    private XAmzTarget2AwsCodeBuildBuildsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCodeBuildBuildsApi CodeBuild20161006ListBuilds = new(
        "CodeBuild_20161006.ListBuilds");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListBuilds, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListBuilds => onCodeBuild20161006ListBuilds(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListBuilds, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListBuilds) onCodeBuild20161006ListBuilds();
        else otherwise(Value);
    }
}
