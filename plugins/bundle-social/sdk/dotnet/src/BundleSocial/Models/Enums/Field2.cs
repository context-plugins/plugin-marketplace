using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Field2>))]
public sealed record Field2 : OpenStringEnum<Field2>
{
    private Field2(string value) : base(value)
    {
    }

    public static readonly Field2 ServiceItems = new("serviceItems");

    public TResult Match<TResult>(Func<TResult> onServiceItems, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ServiceItems => onServiceItems(),
            _ => otherwise(Value)
        };

    public void Match(Action onServiceItems, Action<string> otherwise)
    {
        if (this == ServiceItems) onServiceItems();
        else otherwise(Value);
    }
}
