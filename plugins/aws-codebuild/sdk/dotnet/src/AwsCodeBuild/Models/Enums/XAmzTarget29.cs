using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget29>))]
public sealed record XAmzTarget29 : OpenStringEnum<XAmzTarget29>
{
    private XAmzTarget29(string value) : base(value)
    {
    }

    public static readonly XAmzTarget29 CodeBuild20161006DescribeCodeCoverages = new(
        "CodeBuild_20161006.DescribeCodeCoverages");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DescribeCodeCoverages,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DescribeCodeCoverages => onCodeBuild20161006DescribeCodeCoverages(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DescribeCodeCoverages, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DescribeCodeCoverages) onCodeBuild20161006DescribeCodeCoverages();
        else otherwise(Value);
    }
}
