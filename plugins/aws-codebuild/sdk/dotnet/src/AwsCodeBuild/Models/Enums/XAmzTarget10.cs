using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget10>))]
public sealed record XAmzTarget10 : OpenStringEnum<XAmzTarget10>
{
    private XAmzTarget10(string value) : base(value)
    {
    }

    public static readonly XAmzTarget10 CodeBuild20161006BatchGetReportGroups = new(
        "CodeBuild_20161006.BatchGetReportGroups");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetReportGroups,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetReportGroups => onCodeBuild20161006BatchGetReportGroups(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetReportGroups, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetReportGroups) onCodeBuild20161006BatchGetReportGroups();
        else otherwise(Value);
    }
}
