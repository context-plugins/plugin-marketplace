using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The authentication method used in the context of an API request.
/// Only present if the <c>context_type</c> is <c>api</c>. Can be one of <c>cookie</c>, <c>oauth</c>, <c>personal_access_token</c>, or <c>service_account</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiAuthenticationMethod>))]
public sealed record ApiAuthenticationMethod : OpenStringEnum<ApiAuthenticationMethod>
{
    private ApiAuthenticationMethod(string value) : base(value)
    {
    }

    public static readonly ApiAuthenticationMethod Cookie = new("cookie");

    public static readonly ApiAuthenticationMethod Oauth = new("oauth");

    public static readonly ApiAuthenticationMethod PersonalAccessToken = new("personal_access_token");

    public static readonly ApiAuthenticationMethod ServiceAccount = new("service_account");

    public TResult Match<TResult>(Func<TResult> onCookie,
        Func<TResult> onOauth,
        Func<TResult> onPersonalAccessToken,
        Func<TResult> onServiceAccount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cookie => onCookie(),
            _ when this == Oauth => onOauth(),
            _ when this == PersonalAccessToken => onPersonalAccessToken(),
            _ when this == ServiceAccount => onServiceAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onCookie,
        Action onOauth,
        Action onPersonalAccessToken,
        Action onServiceAccount,
        Action<string> otherwise)
    {
        if (this == Cookie) onCookie();
        else if (this == Oauth) onOauth();
        else if (this == PersonalAccessToken) onPersonalAccessToken();
        else if (this == ServiceAccount) onServiceAccount();
        else otherwise(Value);
    }
}
