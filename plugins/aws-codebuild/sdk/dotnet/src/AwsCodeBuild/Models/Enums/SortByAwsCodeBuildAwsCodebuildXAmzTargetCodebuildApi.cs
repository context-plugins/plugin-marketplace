using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies how the results are sorted. Possible values are: FILE_PATH The results are sorted by file path. LINE_COVERAGE_PERCENTAGE The results are sorted by the percentage of lines that are covered.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi LineCoveragePercentage = new(
        "LINE_COVERAGE_PERCENTAGE");

    public static readonly SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi FilePath = new("FILE_PATH");

    public TResult Match<TResult>(Func<TResult> onLineCoveragePercentage,
        Func<TResult> onFilePath,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LineCoveragePercentage => onLineCoveragePercentage(),
            _ when this == FilePath => onFilePath(),
            _ => otherwise(Value)
        };

    public void Match(Action onLineCoveragePercentage, Action onFilePath, Action<string> otherwise)
    {
        if (this == LineCoveragePercentage) onLineCoveragePercentage();
        else if (this == FilePath) onFilePath();
        else otherwise(Value);
    }
}
