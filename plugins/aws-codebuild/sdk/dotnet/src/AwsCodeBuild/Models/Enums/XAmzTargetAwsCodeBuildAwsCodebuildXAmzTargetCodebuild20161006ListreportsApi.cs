using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>))]
public sealed record XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi : OpenStringEnum<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>
{
    private XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi CodeBuild20161006ListReports = new(
        "CodeBuild_20161006.ListReports");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListReports, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006ListReports => onCodeBuild20161006ListReports(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListReports, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListReports) onCodeBuild20161006ListReports();
        else otherwise(Value);
    }
}
