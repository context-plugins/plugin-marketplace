using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies the sort order of the returned items. Valid values include: ASCENDING: List the batch build identifiers in ascending order by identifier. DESCENDING: List the batch build identifiers in descending order by identifier.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder1>))]
public sealed record SortOrder1 : OpenStringEnum<SortOrder1>
{
    private SortOrder1(string value) : base(value)
    {
    }

    public static readonly SortOrder1 Ascending = new("ASCENDING");

    public static readonly SortOrder1 Descending = new("DESCENDING");

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
