using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The order so sort the list.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByOrder>))]
public sealed record SortByOrder : OpenStringEnum<SortByOrder>
{
    private SortByOrder(string value) : base(value)
    {
    }

    public static readonly SortByOrder Ascending = new("ASCENDING");

    public static readonly SortByOrder Descending = new("DESCENDING");

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
