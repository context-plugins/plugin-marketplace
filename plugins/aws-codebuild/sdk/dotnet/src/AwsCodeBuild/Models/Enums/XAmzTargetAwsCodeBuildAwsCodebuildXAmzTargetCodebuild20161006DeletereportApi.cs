using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi>))]
public sealed record XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi : OpenStringEnum<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi>
{
    private XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi CodeBuild20161006DeleteReport = new(
        "CodeBuild_20161006.DeleteReport");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteReport, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteReport => onCodeBuild20161006DeleteReport(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteReport, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteReport) onCodeBuild20161006DeleteReport();
        else otherwise(Value);
    }
}
