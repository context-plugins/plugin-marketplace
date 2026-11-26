using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sort1>))]
public sealed record Sort1 : OpenStringEnum<Sort1>
{
    private Sort1(string value) : base(value)
    {
    }

    public static readonly Sort1 Published = new("published");

    public static readonly Sort1 Ingested = new("ingested");

    public TResult Match<TResult>(Func<TResult> onPublished,
        Func<TResult> onIngested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Published => onPublished(),
            _ when this == Ingested => onIngested(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublished, Action onIngested, Action<string> otherwise)
    {
        if (this == Published) onPublished();
        else if (this == Ingested) onIngested();
        else otherwise(Value);
    }
}
