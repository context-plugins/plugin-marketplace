using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The order to list build IDs. Valid values include: ASCENDING: List the build IDs in ascending order by build ID. DESCENDING: List the build IDs in descending order by build ID.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder>))]
public sealed record SortOrder : OpenStringEnum<SortOrder>
{
    private SortOrder(string value) : base(value)
    {
    }

    public static readonly SortOrder Ascending = new("ASCENDING");

    public static readonly SortOrder Descending = new("DESCENDING");

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
