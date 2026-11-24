using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The order in which to list shared report groups. Valid values include: ASCENDING: List in ascending order. DESCENDING: List in descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder7>))]
public sealed record SortOrder7 : OpenStringEnum<SortOrder7>
{
    private SortOrder7(string value) : base(value)
    {
    }

    public static readonly SortOrder7 Ascending = new("ASCENDING");

    public static readonly SortOrder7 Descending = new("DESCENDING");

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
