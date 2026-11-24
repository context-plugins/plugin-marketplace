using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to sort in ascending or descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrderAmazonLexModelBuildingV2TestexecutionsApi>))]
public sealed record OrderAmazonLexModelBuildingV2TestexecutionsApi : OpenStringEnum<OrderAmazonLexModelBuildingV2TestexecutionsApi>
{
    private OrderAmazonLexModelBuildingV2TestexecutionsApi(string value) : base(value)
    {
    }

    public static readonly OrderAmazonLexModelBuildingV2TestexecutionsApi Ascending = new("Ascending");

    public static readonly OrderAmazonLexModelBuildingV2TestexecutionsApi Descending = new("Descending");

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
