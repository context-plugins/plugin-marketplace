using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Scope 403s only: which axis refused (<c>not_in_key_scope</c> and <c>product_not_in_region</c> product; <c>region_not_in_scope</c> and <c>bookmaker_not_in_region</c> region; <c>schema_not_in_scope</c> schema).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Product = new("product");

    public static readonly TypeEnum Region = new("region");

    public static readonly TypeEnum Schema = new("schema");

    public TResult Match<TResult>(Func<TResult> onProduct,
        Func<TResult> onRegion,
        Func<TResult> onSchema,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Product => onProduct(),
            _ when this == Region => onRegion(),
            _ when this == Schema => onSchema(),
            _ => otherwise(Value)
        };

    public void Match(Action onProduct, Action onRegion, Action onSchema, Action<string> otherwise)
    {
        if (this == Product) onProduct();
        else if (this == Region) onRegion();
        else if (this == Schema) onSchema();
        else otherwise(Value);
    }
}
