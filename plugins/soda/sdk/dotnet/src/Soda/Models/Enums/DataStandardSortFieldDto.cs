using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DataStandardSortFieldDto>))]
public sealed record DataStandardSortFieldDto : OpenStringEnum<DataStandardSortFieldDto>
{
    private DataStandardSortFieldDto(string value) : base(value)
    {
    }

    public static readonly DataStandardSortFieldDto Name = new("name");

    public static readonly DataStandardSortFieldDto Label = new("label");

    public TResult Match<TResult>(Func<TResult> onName, Func<TResult> onLabel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == Label => onLabel(),
            _ => otherwise(Value)
        };

    public void Match(Action onName, Action onLabel, Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == Label) onLabel();
        else otherwise(Value);
    }
}
