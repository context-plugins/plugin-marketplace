using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget15>))]
public sealed record XAmzTarget15 : OpenStringEnum<XAmzTarget15>
{
    private XAmzTarget15(string value) : base(value)
    {
    }

    public static readonly XAmzTarget15 CodeBuild20161006BatchGetReports = new("CodeBuild_20161006.BatchGetReports");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006BatchGetReports, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006BatchGetReports => onCodeBuild20161006BatchGetReports(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006BatchGetReports, Action<string> otherwise)
    {
        if (this == CodeBuild20161006BatchGetReports) onCodeBuild20161006BatchGetReports();
        else otherwise(Value);
    }
}
