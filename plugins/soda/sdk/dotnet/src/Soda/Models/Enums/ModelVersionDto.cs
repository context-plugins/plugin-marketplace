using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModelVersionDto>))]
public sealed record ModelVersionDto : OpenStringEnum<ModelVersionDto>
{
    private ModelVersionDto(string value) : base(value)
    {
    }

    public static readonly ModelVersionDto _3 = new("3");

    public static readonly ModelVersionDto _4 = new("4");

    public TResult Match<TResult>(Func<TResult> on_3, Func<TResult> on_4, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _3 => on_3(),
            _ when this == _4 => on_4(),
            _ => otherwise(Value)
        };

    public void Match(Action on_3, Action on_4, Action<string> otherwise)
    {
        if (this == _3) on_3();
        else if (this == _4) on_4();
        else otherwise(Value);
    }
}
