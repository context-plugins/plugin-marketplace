using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Channel visibility, resolved server-side.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Public = new("public");

    public static readonly TypeEnum Private = new("private");

    public TResult Match<TResult>(Func<TResult> onPublic, Func<TResult> onPrivate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic, Action onPrivate, Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
