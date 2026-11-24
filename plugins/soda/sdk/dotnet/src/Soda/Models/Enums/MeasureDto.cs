using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MeasureDto>))]
public sealed record MeasureDto : OpenStringEnum<MeasureDto>
{
    private MeasureDto(string value) : base(value)
    {
    }

    public static readonly MeasureDto Time = new("time");

    public TResult Match<TResult>(Func<TResult> onTime, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Time => onTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onTime, Action<string> otherwise)
    {
        if (this == Time) onTime();
        else otherwise(Value);
    }
}
