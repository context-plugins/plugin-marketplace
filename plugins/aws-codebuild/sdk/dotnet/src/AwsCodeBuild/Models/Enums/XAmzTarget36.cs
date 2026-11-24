using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget36>))]
public sealed record XAmzTarget36 : OpenStringEnum<XAmzTarget36>
{
    private XAmzTarget36(string value) : base(value)
    {
    }

    public static readonly XAmzTarget36 CodeBuild20161006ListSharedReportGroups = new(
        "CodeBuild_20161006.ListSharedReportGroups");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListSharedReportGroups,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListSharedReportGroups => onCodeBuild20161006ListSharedReportGroups(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListSharedReportGroups, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListSharedReportGroups) onCodeBuild20161006ListSharedReportGroups();
        else otherwise(Value);
    }
}
