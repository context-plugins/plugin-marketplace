using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to bin the analytics data in ascending or descending order. If this field is left blank, the default order is by the key of the bin in descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Order1>))]
public sealed record Order1 : OpenStringEnum<Order1>
{
    private Order1(string value) : base(value)
    {
    }

    public static readonly Order1 Ascending = new("Ascending");

    public static readonly Order1 Descending = new("Descending");

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
