using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCodeBuildFleetApi>))]
public sealed record XAmzTarget3AwsCodeBuildFleetApi : OpenStringEnum<XAmzTarget3AwsCodeBuildFleetApi>
{
    private XAmzTarget3AwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCodeBuildFleetApi CodeBuild20161006ListFleets = new(
        "CodeBuild_20161006.ListFleets");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListFleets, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListFleets => onCodeBuild20161006ListFleets(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListFleets, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListFleets) onCodeBuild20161006ListFleets();
        else otherwise(Value);
    }
}
