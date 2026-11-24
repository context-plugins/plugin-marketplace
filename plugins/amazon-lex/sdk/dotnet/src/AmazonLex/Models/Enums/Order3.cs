using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to sort the results in ascending or descending order of the summary statistic (value in the response).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Order3>))]
public sealed record Order3 : OpenStringEnum<Order3>
{
    private Order3(string value) : base(value)
    {
    }

    public static readonly Order3 Ascending = new("Ascending");

    public static readonly Order3 Descending = new("Descending");

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
