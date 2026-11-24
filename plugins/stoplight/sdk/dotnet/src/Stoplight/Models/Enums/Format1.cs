using System;
using System.Text.Json.Serialization;
using Stoplight.Core.Enum;

namespace Stoplight.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format1>))]
public sealed record Format1 : OpenStringEnum<Format1>
{
    private Format1(string value) : base(value)
    {
    }

    public static readonly Format1 Raml08 = new("RAML08");

    public static readonly Format1 Raml10 = new("RAML10");

    public static readonly Format1 Swagger = new("SWAGGER");

    public static readonly Format1 Stoplightx = new("STOPLIGHTX");

    public TResult Match<TResult>(Func<TResult> onRaml08,
        Func<TResult> onRaml10,
        Func<TResult> onSwagger,
        Func<TResult> onStoplightx,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Raml08 => onRaml08(),
            _ when this == Raml10 => onRaml10(),
            _ when this == Swagger => onSwagger(),
            _ when this == Stoplightx => onStoplightx(),
            _ => otherwise(Value)
        };

    public void Match(Action onRaml08, Action onRaml10, Action onSwagger, Action onStoplightx, Action<string> otherwise)
    {
        if (this == Raml08) onRaml08();
        else if (this == Raml10) onRaml10();
        else if (this == Swagger) onSwagger();
        else if (this == Stoplightx) onStoplightx();
        else otherwise(Value);
    }
}
