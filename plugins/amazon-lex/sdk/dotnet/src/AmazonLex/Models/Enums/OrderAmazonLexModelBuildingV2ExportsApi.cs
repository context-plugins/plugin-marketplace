using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The order to sort the list.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrderAmazonLexModelBuildingV2ExportsApi>))]
public sealed record OrderAmazonLexModelBuildingV2ExportsApi : OpenStringEnum<OrderAmazonLexModelBuildingV2ExportsApi>
{
    private OrderAmazonLexModelBuildingV2ExportsApi(string value) : base(value)
    {
    }

    public static readonly OrderAmazonLexModelBuildingV2ExportsApi Ascending = new("Ascending");

    public static readonly OrderAmazonLexModelBuildingV2ExportsApi Descending = new("Descending");

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
