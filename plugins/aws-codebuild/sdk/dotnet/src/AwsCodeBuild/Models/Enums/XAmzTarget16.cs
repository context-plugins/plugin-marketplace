using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget16>))]
public sealed record XAmzTarget16 : OpenStringEnum<XAmzTarget16>
{
    private XAmzTarget16(string value) : base(value)
    {
    }

    public static readonly XAmzTarget16 CodeBuild20161006ListReportsForReportGroup = new(
        "CodeBuild_20161006.ListReportsForReportGroup");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListReportsForReportGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListReportsForReportGroup => onCodeBuild20161006ListReportsForReportGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListReportsForReportGroup, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListReportsForReportGroup) onCodeBuild20161006ListReportsForReportGroup();
        else otherwise(Value);
    }
}
