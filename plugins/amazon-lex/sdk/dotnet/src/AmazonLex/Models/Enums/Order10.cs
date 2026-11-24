using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The order by which to sort the generation request information.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Order10>))]
public sealed record Order10 : OpenStringEnum<Order10>
{
    private Order10(string value) : base(value)
    {
    }

    public static readonly Order10 Ascending = new("Ascending");

    public static readonly Order10 Descending = new("Descending");

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
