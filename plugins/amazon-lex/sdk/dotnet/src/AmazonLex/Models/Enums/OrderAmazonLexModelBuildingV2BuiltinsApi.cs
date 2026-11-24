using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The order to sort the list. You can specify ascending or descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrderAmazonLexModelBuildingV2BuiltinsApi>))]
public sealed record OrderAmazonLexModelBuildingV2BuiltinsApi : OpenStringEnum<OrderAmazonLexModelBuildingV2BuiltinsApi>
{
    private OrderAmazonLexModelBuildingV2BuiltinsApi(string value) : base(value)
    {
    }

    public static readonly OrderAmazonLexModelBuildingV2BuiltinsApi Ascending = new("Ascending");

    public static readonly OrderAmazonLexModelBuildingV2BuiltinsApi Descending = new("Descending");

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
