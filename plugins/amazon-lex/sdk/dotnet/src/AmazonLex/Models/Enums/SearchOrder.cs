using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SearchOrder>))]
public sealed record SearchOrder : OpenStringEnum<SearchOrder>
{
    private SearchOrder(string value) : base(value)
    {
    }

    public static readonly SearchOrder Ascending = new("Ascending");

    public static readonly SearchOrder Descending = new("Descending");

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
