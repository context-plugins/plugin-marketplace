using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget30>))]
public sealed record XAmzTarget30 : OpenStringEnum<XAmzTarget30>
{
    private XAmzTarget30(string value) : base(value)
    {
    }

    public static readonly XAmzTarget30 CodeBuild20161006DescribeTestCases = new(
        "CodeBuild_20161006.DescribeTestCases");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DescribeTestCases,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DescribeTestCases => onCodeBuild20161006DescribeTestCases(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DescribeTestCases, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DescribeTestCases) onCodeBuild20161006DescribeTestCases();
        else otherwise(Value);
    }
}
