using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies the sort order for the list of returned reports. Valid values are: ASCENDING: return reports in chronological order based on their creation date. DESCENDING: return reports in the reverse chronological order based on their creation date.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>))]
public sealed record SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi : OpenStringEnum<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>
{
    private SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi(string value) : base(value)
    {
    }

    public static readonly SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi Ascending = new(
        "ASCENDING");

    public static readonly SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi Descending = new(
        "DESCENDING");

    public TResult Match<TResult>(Func<TResult> onAscending,
        Func<TResult> onDescending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ascending => onAscending(),
            _ when this == Descending => onDescending(),
            _ => otherwise(Value)
        };

    public void Match(Action onAscending, Action onDescending, Action<string> otherwise)
    {
        if (this == Ascending) onAscending();
        else if (this == Descending) onDescending();
        else otherwise(Value);
    }
}
