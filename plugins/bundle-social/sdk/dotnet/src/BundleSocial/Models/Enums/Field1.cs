using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Field1>))]
public sealed record Field1 : OpenStringEnum<Field1>
{
    private Field1(string value) : base(value)
    {
    }

    public static readonly Field1 RegularHours = new("regularHours");

    public static readonly Field1 SpecialHours = new("specialHours");

    public static readonly Field1 MoreHours = new("moreHours");

    public TResult Match<TResult>(Func<TResult> onRegularHours,
        Func<TResult> onSpecialHours,
        Func<TResult> onMoreHours,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RegularHours => onRegularHours(),
            _ when this == SpecialHours => onSpecialHours(),
            _ when this == MoreHours => onMoreHours(),
            _ => otherwise(Value)
        };

    public void Match(Action onRegularHours, Action onSpecialHours, Action onMoreHours, Action<string> otherwise)
    {
        if (this == RegularHours) onRegularHours();
        else if (this == SpecialHours) onSpecialHours();
        else if (this == MoreHours) onMoreHours();
        else otherwise(Value);
    }
}
