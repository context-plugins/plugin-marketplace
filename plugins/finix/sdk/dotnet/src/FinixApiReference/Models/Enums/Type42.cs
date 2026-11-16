using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of authentication the <c>Webhook</c> will use:
/// - <c>NONE</c> - No authentication will be used.
/// - <c>BASIC</c> - Basic authentication.
/// - <c>BEARER</c> - OAuth2 Bearer Token.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type42>))]
public sealed record Type42 : OpenStringEnum<Type42>
{
    private Type42(string value) : base(value)
    {
    }

    public static readonly Type42 None = new("NONE");

    public static readonly Type42 Basic = new("BASIC");

    public static readonly Type42 Bearer = new("BEARER");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onBasic,
        Func<TResult> onBearer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Basic => onBasic(),
            _ when this == Bearer => onBearer(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onBasic, Action onBearer, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Basic) onBasic();
        else if (this == Bearer) onBearer();
        else otherwise(Value);
    }
}
