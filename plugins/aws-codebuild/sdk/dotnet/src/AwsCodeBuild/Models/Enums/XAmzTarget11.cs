using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11>))]
public sealed record XAmzTarget11 : OpenStringEnum<XAmzTarget11>
{
    private XAmzTarget11(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11 CodeBuild20161006CreateReportGroup = new(
        "CodeBuild_20161006.CreateReportGroup");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006CreateReportGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006CreateReportGroup => onCodeBuild20161006CreateReportGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006CreateReportGroup, Action<string> otherwise)
    {
        if (this == CodeBuild20161006CreateReportGroup) onCodeBuild20161006CreateReportGroup();
        else otherwise(Value);
    }
}
