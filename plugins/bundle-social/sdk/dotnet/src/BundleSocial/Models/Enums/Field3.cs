using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Field3>))]
public sealed record Field3 : OpenStringEnum<Field3>
{
    private Field3(string value) : base(value)
    {
    }

    public static readonly Field3 Name = new("name");

    public static readonly Field3 Menus = new("menus");

    public TResult Match<TResult>(Func<TResult> onName, Func<TResult> onMenus, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == Menus => onMenus(),
            _ => otherwise(Value)
        };

    public void Match(Action onName, Action onMenus, Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == Menus) onMenus();
        else otherwise(Value);
    }
}
