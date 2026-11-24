using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The order to sort the list. You can choose ascending or descending.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Order7>))]
public sealed record Order7 : OpenStringEnum<Order7>
{
    private Order7(string value) : base(value)
    {
    }

    public static readonly Order7 Ascending = new("Ascending");

    public static readonly Order7 Descending = new("Descending");

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
