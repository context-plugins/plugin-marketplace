using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Only supported relationship is a child relationship.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonComprehendOperationsApi>))]
public sealed record TypeAmazonComprehendOperationsApi : OpenStringEnum<TypeAmazonComprehendOperationsApi>
{
    private TypeAmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonComprehendOperationsApi Child = new("CHILD");

    public TResult Match<TResult>(Func<TResult> onChild, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Child => onChild(),
            _ => otherwise(Value)
        };

    public void Match(Action onChild, Action<string> otherwise)
    {
        if (this == Child) onChild();
        else otherwise(Value);
    }
}
