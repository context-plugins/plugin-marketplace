using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget14>))]
public sealed record XAmzTarget14 : OpenStringEnum<XAmzTarget14>
{
    private XAmzTarget14(string value) : base(value)
    {
    }

    public static readonly XAmzTarget14 CodeBuild20161006UpdateReportGroup = new(
        "CodeBuild_20161006.UpdateReportGroup");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006UpdateReportGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006UpdateReportGroup => onCodeBuild20161006UpdateReportGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006UpdateReportGroup, Action<string> otherwise)
    {
        if (this == CodeBuild20161006UpdateReportGroup) onCodeBuild20161006UpdateReportGroup();
        else otherwise(Value);
    }
}
