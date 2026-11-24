using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget31>))]
public sealed record XAmzTarget31 : OpenStringEnum<XAmzTarget31>
{
    private XAmzTarget31(string value) : base(value)
    {
    }

    public static readonly XAmzTarget31 CodeBuild20161006GetReportGroupTrend = new(
        "CodeBuild_20161006.GetReportGroupTrend");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006GetReportGroupTrend,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006GetReportGroupTrend => onCodeBuild20161006GetReportGroupTrend(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006GetReportGroupTrend, Action<string> otherwise)
    {
        if (this == CodeBuild20161006GetReportGroupTrend) onCodeBuild20161006GetReportGroupTrend();
        else otherwise(Value);
    }
}
