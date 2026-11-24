using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Signifies if the order was either Intraday, Delivery, CO or OCO
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProductOpenApiDefinitionOrderApi>))]
public sealed record ProductOpenApiDefinitionOrderApi : OpenStringEnum<ProductOpenApiDefinitionOrderApi>
{
    private ProductOpenApiDefinitionOrderApi(string value) : base(value)
    {
    }

    public static readonly ProductOpenApiDefinitionOrderApi I = new("I");

    public static readonly ProductOpenApiDefinitionOrderApi D = new("D");

    public TResult Match<TResult>(Func<TResult> onI, Func<TResult> onD, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == I => onI(),
            _ when this == D => onD(),
            _ => otherwise(Value)
        };

    public void Match(Action onI, Action onD, Action<string> otherwise)
    {
        if (this == I) onI();
        else if (this == D) onD();
        else otherwise(Value);
    }
}
