using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildFleetApi>))]
public sealed record XAmzTargetAwsCodeBuildFleetApi : OpenStringEnum<XAmzTargetAwsCodeBuildFleetApi>
{
    private XAmzTargetAwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildFleetApi CodeBuild20161006BatchGetFleets = new(
        "CodeBuild_20161006.BatchGetFleets");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetFleets, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetFleets => onCodeBuild20161006BatchGetFleets(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetFleets, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetFleets) onCodeBuild20161006BatchGetFleets();
        else otherwise(Value);
    }
}
