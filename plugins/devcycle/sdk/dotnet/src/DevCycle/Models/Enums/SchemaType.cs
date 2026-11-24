using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SchemaType>))]
public sealed record SchemaType : OpenStringEnum<SchemaType>
{
    private SchemaType(string value) : base(value)
    {
    }

    public static readonly SchemaType Enum = new("enum");

    public TResult Match<TResult>(Func<TResult> onEnum, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enum => onEnum(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnum, Action<string> otherwise)
    {
        if (this == Enum) onEnum();
        else otherwise(Value);
    }
}
