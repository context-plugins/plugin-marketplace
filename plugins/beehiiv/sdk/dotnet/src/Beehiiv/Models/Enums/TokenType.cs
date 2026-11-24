using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The token type returned by OAuth2 token endpoints.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TokenType>))]
public sealed record TokenType : OpenStringEnum<TokenType>
{
    private TokenType(string value) : base(value)
    {
    }

    public static readonly TokenType Bearer = new("Bearer");

    public TResult Match<TResult>(Func<TResult> onBearer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bearer => onBearer(),
            _ => otherwise(Value)
        };

    public void Match(Action onBearer, Action<string> otherwise)
    {
        if (this == Bearer) onBearer();
        else otherwise(Value);
    }
}
