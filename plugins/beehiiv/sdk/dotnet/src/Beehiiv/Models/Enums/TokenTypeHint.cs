using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// A hint about the type of token being sent.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TokenTypeHint>))]
public sealed record TokenTypeHint : OpenStringEnum<TokenTypeHint>
{
    private TokenTypeHint(string value) : base(value)
    {
    }

    public static readonly TokenTypeHint AccessToken = new("access_token");

    public static readonly TokenTypeHint RefreshToken = new("refresh_token");

    public TResult Match<TResult>(Func<TResult> onAccessToken,
        Func<TResult> onRefreshToken,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AccessToken => onAccessToken(),
            _ when this == RefreshToken => onRefreshToken(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccessToken, Action onRefreshToken, Action<string> otherwise)
    {
        if (this == AccessToken) onAccessToken();
        else if (this == RefreshToken) onRefreshToken();
        else otherwise(Value);
    }
}
