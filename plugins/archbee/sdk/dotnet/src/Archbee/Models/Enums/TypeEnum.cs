using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// Type of import file. Default openapi
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Openapi = new("openapi");

    public static readonly TypeEnum Postman = new("postman");

    public TResult Match<TResult>(Func<TResult> onOpenapi, Func<TResult> onPostman, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Openapi => onOpenapi(),
            _ when this == Postman => onPostman(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpenapi, Action onPostman, Action<string> otherwise)
    {
        if (this == Openapi) onOpenapi();
        else if (this == Postman) onPostman();
        else otherwise(Value);
    }
}
