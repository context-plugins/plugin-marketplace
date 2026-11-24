using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Application-specific error code, expressed as a string value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code5>))]
public sealed record Code5 : OpenStringEnum<Code5>
{
    private Code5(string value) : base(value)
    {
    }

    public static readonly Code5 UnauthorizedAccess = new("unauthorized-access");

    public static readonly Code5 InvalidAuthorizationToken = new("invalid-authorization-token");

    public TResult Match<TResult>(Func<TResult> onUnauthorizedAccess,
        Func<TResult> onInvalidAuthorizationToken,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UnauthorizedAccess => onUnauthorizedAccess(),
            _ when this == InvalidAuthorizationToken => onInvalidAuthorizationToken(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnauthorizedAccess, Action onInvalidAuthorizationToken, Action<string> otherwise)
    {
        if (this == UnauthorizedAccess) onUnauthorizedAccess();
        else if (this == InvalidAuthorizationToken) onInvalidAuthorizationToken();
        else otherwise(Value);
    }
}
