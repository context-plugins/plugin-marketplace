using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Field4>))]
public sealed record Field4 : OpenStringEnum<Field4>
{
    private Field4(string value) : base(value)
    {
    }

    public static readonly Field4 Menus = new("menus");

    public TResult Match<TResult>(Func<TResult> onMenus, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Menus => onMenus(),
            _ => otherwise(Value)
        };

    public void Match(Action onMenus, Action<string> otherwise)
    {
        if (this == Menus) onMenus();
        else otherwise(Value);
    }
}
