using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCodeBuildFleetApi>))]
public sealed record XAmzTarget1AwsCodeBuildFleetApi : OpenStringEnum<XAmzTarget1AwsCodeBuildFleetApi>
{
    private XAmzTarget1AwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCodeBuildFleetApi CodeBuild20161006CreateFleet = new(
        "CodeBuild_20161006.CreateFleet");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006CreateFleet, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006CreateFleet => onCodeBuild20161006CreateFleet(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006CreateFleet, Action<string> otherwise)
    {
        if (this == CodeBuild20161006CreateFleet) onCodeBuild20161006CreateFleet();
        else otherwise(Value);
    }
}
