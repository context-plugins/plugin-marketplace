using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Authorization type identifier
/// user AuthorizationUser  AuthorizationUser "User" authorization type identifier
/// token AuthorizationToken AuthorizationToken "Token" authorization type identifier
/// other AuthorizationOther  AuthorizationOther "Other" authorization type identifier
/// user-mfa AuthorizationUserMfa  AuthorizationUserMfa "UserMfa" authorization type identifier
/// user-mfa-intermittent AuthorizationUserMfaIntermittent AuthorizationUserMfaIntermittent "UserMfaIntermittent" authorization type identifier
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 User = new("user");

    public static readonly Type1 Token = new("token");

    public static readonly Type1 Other = new("other");

    public static readonly Type1 UserMfa = new("user-mfa");

    public static readonly Type1 UserMfaIntermittent = new("user-mfa-intermittent");

    public TResult Match<TResult>(Func<TResult> onUser,
        Func<TResult> onToken,
        Func<TResult> onOther,
        Func<TResult> onUserMfa,
        Func<TResult> onUserMfaIntermittent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Token => onToken(),
            _ when this == Other => onOther(),
            _ when this == UserMfa => onUserMfa(),
            _ when this == UserMfaIntermittent => onUserMfaIntermittent(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser,
        Action onToken,
        Action onOther,
        Action onUserMfa,
        Action onUserMfaIntermittent,
        Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Token) onToken();
        else if (this == Other) onOther();
        else if (this == UserMfa) onUserMfa();
        else if (this == UserMfaIntermittent) onUserMfaIntermittent();
        else otherwise(Value);
    }
}
