using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Product name. Always 'route' for Route product.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProductName>))]
public sealed record ProductName : OpenStringEnum<ProductName>
{
    private ProductName(string value) : base(value)
    {
    }

    public static readonly ProductName Route = new("route");

    public TResult Match<TResult>(Func<TResult> onRoute, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Route => onRoute(),
            _ => otherwise(Value)
        };

    public void Match(Action onRoute, Action<string> otherwise)
    {
        if (this == Route) onRoute();
        else otherwise(Value);
    }
}
