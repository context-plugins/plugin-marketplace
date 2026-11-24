using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12>))]
public sealed record XAmzTarget12 : OpenStringEnum<XAmzTarget12>
{
    private XAmzTarget12(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12 CodeBuild20161006DeleteReportGroup = new(
        "CodeBuild_20161006.DeleteReportGroup");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteReportGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteReportGroup => onCodeBuild20161006DeleteReportGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteReportGroup, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteReportGroup) onCodeBuild20161006DeleteReportGroup();
        else otherwise(Value);
    }
}
