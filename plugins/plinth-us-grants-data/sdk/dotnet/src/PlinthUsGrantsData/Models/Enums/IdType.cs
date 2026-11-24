using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdType>))]
public sealed record IdType : OpenStringEnum<IdType>
{
    private IdType(string value) : base(value)
    {
    }

    public static readonly IdType Ein = new("ein");

    public TResult Match<TResult>(Func<TResult> onEin, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ein => onEin(),
            _ => otherwise(Value)
        };

    public void Match(Action onEin, Action<string> otherwise)
    {
        if (this == Ein) onEin();
        else otherwise(Value);
    }
}
