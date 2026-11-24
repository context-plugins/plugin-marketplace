using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The order in which to list compute fleets. Valid values include: ASCENDING: List in ascending order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to list compute fleet names.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrderAwsCodeBuildFleetApi>))]
public sealed record SortOrderAwsCodeBuildFleetApi : OpenStringEnum<SortOrderAwsCodeBuildFleetApi>
{
    private SortOrderAwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly SortOrderAwsCodeBuildFleetApi Ascending = new("ASCENDING");

    public static readonly SortOrderAwsCodeBuildFleetApi Descending = new("DESCENDING");

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
