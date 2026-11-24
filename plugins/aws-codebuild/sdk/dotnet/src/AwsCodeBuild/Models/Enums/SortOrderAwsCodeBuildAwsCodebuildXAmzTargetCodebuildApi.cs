using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies if the results are sorted in ascending or descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Ascending = new("ASCENDING");

    public static readonly SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Descending = new("DESCENDING");

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
