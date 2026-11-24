using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity>))]
public sealed record Entity : OpenStringEnum<Entity>
{
    private Entity(string value) : base(value)
    {
    }

    public static readonly Entity Collection = new("collection");

    public TResult Match<TResult>(Func<TResult> onCollection, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Collection => onCollection(),
            _ => otherwise(Value)
        };

    public void Match(Action onCollection, Action<string> otherwise)
    {
        if (this == Collection) onCollection();
        else otherwise(Value);
    }
}
