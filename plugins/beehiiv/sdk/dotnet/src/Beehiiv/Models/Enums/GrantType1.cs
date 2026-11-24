using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// authorization_code or refresh_token.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GrantType1>))]
public sealed record GrantType1 : OpenStringEnum<GrantType1>
{
    private GrantType1(string value) : base(value)
    {
    }

    public static readonly GrantType1 AuthorizationCode = new("authorization_code");

    public static readonly GrantType1 RefreshToken = new("refresh_token");

    public TResult Match<TResult>(Func<TResult> onAuthorizationCode,
        Func<TResult> onRefreshToken,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AuthorizationCode => onAuthorizationCode(),
            _ when this == RefreshToken => onRefreshToken(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthorizationCode, Action onRefreshToken, Action<string> otherwise)
    {
        if (this == AuthorizationCode) onAuthorizationCode();
        else if (this == RefreshToken) onRefreshToken();
        else otherwise(Value);
    }
}
