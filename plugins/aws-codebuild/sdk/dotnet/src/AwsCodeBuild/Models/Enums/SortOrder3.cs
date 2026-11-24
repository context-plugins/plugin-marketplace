using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The order to sort the results in. The results are sorted by build number, not the build identifier. If this is not specified, the results are sorted in descending order. Valid values include: ASCENDING: List the build identifiers in ascending order, by build number. DESCENDING: List the build identifiers in descending order, by build number. If the project has more than 100 builds, setting the sort order will result in an error.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder3>))]
public sealed record SortOrder3 : OpenStringEnum<SortOrder3>
{
    private SortOrder3(string value) : base(value)
    {
    }

    public static readonly SortOrder3 Ascending = new("ASCENDING");

    public static readonly SortOrder3 Descending = new("DESCENDING");

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
