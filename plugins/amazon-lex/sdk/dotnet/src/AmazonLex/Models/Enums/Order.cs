using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to sort the aggregated utterances in ascending or descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Order>))]
public sealed record Order : OpenStringEnum<Order>
{
    private Order(string value) : base(value)
    {
    }

    public static readonly Order Ascending = new("Ascending");

    public static readonly Order Descending = new("Descending");

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
