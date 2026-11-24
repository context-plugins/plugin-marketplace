using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCodeBuildFleetApi>))]
public sealed record XAmzTarget2AwsCodeBuildFleetApi : OpenStringEnum<XAmzTarget2AwsCodeBuildFleetApi>
{
    private XAmzTarget2AwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCodeBuildFleetApi CodeBuild20161006DeleteFleet = new(
        "CodeBuild_20161006.DeleteFleet");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteFleet, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteFleet => onCodeBuild20161006DeleteFleet(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteFleet, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteFleet) onCodeBuild20161006DeleteFleet();
        else otherwise(Value);
    }
}
