using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The order in which to list build projects. Valid values include: ASCENDING: List in ascending order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to list build project names.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi>))]
public sealed record SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi : OpenStringEnum<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi>
{
    private SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi(string value) : base(value)
    {
    }

    public static readonly SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi Ascending = new(
        "ASCENDING");

    public static readonly SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi Descending = new(
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
