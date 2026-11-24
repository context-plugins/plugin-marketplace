using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13>))]
public sealed record XAmzTarget13 : OpenStringEnum<XAmzTarget13>
{
    private XAmzTarget13(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13 CodeBuild20161006ListReportGroups = new("CodeBuild_20161006.ListReportGroups");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListReportGroups, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListReportGroups => onCodeBuild20161006ListReportGroups(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListReportGroups, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListReportGroups) onCodeBuild20161006ListReportGroups();
        else otherwise(Value);
    }
}
