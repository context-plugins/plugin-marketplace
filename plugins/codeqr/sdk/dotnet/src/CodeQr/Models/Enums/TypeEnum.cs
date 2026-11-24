using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The behavior type for the domain root redirect.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Redirect = new("redirect");

    public static readonly TypeEnum Rewrite = new("rewrite");

    public TResult Match<TResult>(Func<TResult> onRedirect, Func<TResult> onRewrite, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Redirect => onRedirect(),
            _ when this == Rewrite => onRewrite(),
            _ => otherwise(Value)
        };

    public void Match(Action onRedirect, Action onRewrite, Action<string> otherwise)
    {
        if (this == Redirect) onRedirect();
        else if (this == Rewrite) onRewrite();
        else otherwise(Value);
    }
}
