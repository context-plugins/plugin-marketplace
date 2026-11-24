using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. Whether the uploaded file is public or not regarding AWS link.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IsPublic>))]
public sealed record IsPublic : OpenStringEnum<IsPublic>
{
    private IsPublic(string value) : base(value)
    {
    }

    public static readonly IsPublic True = new("true");

    public static readonly IsPublic False = new("false");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
