using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The type of schema being defined. Always <c>json</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeParallelAiFindAllApi>))]
public sealed record TypeParallelAiFindAllApi : OpenStringEnum<TypeParallelAiFindAllApi>
{
    private TypeParallelAiFindAllApi(string value) : base(value)
    {
    }

    public static readonly TypeParallelAiFindAllApi Json = new("json");

    public TResult Match<TResult>(Func<TResult> onJson, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else otherwise(Value);
    }
}
