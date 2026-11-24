using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsCodeBuildFleetApi>))]
public sealed record XAmzTarget4AwsCodeBuildFleetApi : OpenStringEnum<XAmzTarget4AwsCodeBuildFleetApi>
{
    private XAmzTarget4AwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsCodeBuildFleetApi CodeBuild20161006UpdateFleet = new(
        "CodeBuild_20161006.UpdateFleet");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006UpdateFleet, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006UpdateFleet => onCodeBuild20161006UpdateFleet(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006UpdateFleet, Action<string> otherwise)
    {
        if (this == CodeBuild20161006UpdateFleet) onCodeBuild20161006UpdateFleet();
        else otherwise(Value);
    }
}
