using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Which catalog rows a model listing returns.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModelListScope>))]
public sealed record ModelListScope : OpenStringEnum<ModelListScope>
{
    private ModelListScope(string value) : base(value)
    {
    }

    public static readonly ModelListScope Catalog = new("catalog");

    public static readonly ModelListScope Owned = new("owned");

    public TResult Match<TResult>(Func<TResult> onCatalog, Func<TResult> onOwned, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Catalog => onCatalog(),
            _ when this == Owned => onOwned(),
            _ => otherwise(Value)
        };

    public void Match(Action onCatalog, Action onOwned, Action<string> otherwise)
    {
        if (this == Catalog) onCatalog();
        else if (this == Owned) onOwned();
        else otherwise(Value);
    }
}
