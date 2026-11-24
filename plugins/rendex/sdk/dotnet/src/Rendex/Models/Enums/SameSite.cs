using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SameSite>))]
public sealed record SameSite : OpenStringEnum<SameSite>
{
    private SameSite(string value) : base(value)
    {
    }

    public static readonly SameSite Strict = new("Strict");

    public static readonly SameSite Lax = new("Lax");

    public static readonly SameSite None = new("None");

    public TResult Match<TResult>(Func<TResult> onStrict,
        Func<TResult> onLax,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Strict => onStrict(),
            _ when this == Lax => onLax(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onStrict, Action onLax, Action onNone, Action<string> otherwise)
    {
        if (this == Strict) onStrict();
        else if (this == Lax) onLax();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
