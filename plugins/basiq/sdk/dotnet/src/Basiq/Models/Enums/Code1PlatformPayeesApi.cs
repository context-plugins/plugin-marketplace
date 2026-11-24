using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Application-specific error code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code1PlatformPayeesApi>))]
public sealed record Code1PlatformPayeesApi : OpenStringEnum<Code1PlatformPayeesApi>
{
    private Code1PlatformPayeesApi(string value) : base(value)
    {
    }

    public static readonly Code1PlatformPayeesApi Unauthorized = new("unauthorized");

    public static readonly Code1PlatformPayeesApi InvalidToken = new("invalid-token");

    public TResult Match<TResult>(Func<TResult> onUnauthorized,
        Func<TResult> onInvalidToken,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unauthorized => onUnauthorized(),
            _ when this == InvalidToken => onInvalidToken(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnauthorized, Action onInvalidToken, Action<string> otherwise)
    {
        if (this == Unauthorized) onUnauthorized();
        else if (this == InvalidToken) onInvalidToken();
        else otherwise(Value);
    }
}
