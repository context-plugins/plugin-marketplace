using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

/// <summary>
/// Configured receiver-authentication mode.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthenticationEnum>))]
public sealed record AuthenticationEnum : OpenStringEnum<AuthenticationEnum>
{
    private AuthenticationEnum(string value) : base(value)
    {
    }

    public static readonly AuthenticationEnum None = new("none");

    public static readonly AuthenticationEnum Bearer = new("bearer");

    public static readonly AuthenticationEnum XApiKey = new("x-api-key");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onBearer,
        Func<TResult> onXApiKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Bearer => onBearer(),
            _ when this == XApiKey => onXApiKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onBearer, Action onXApiKey, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Bearer) onBearer();
        else if (this == XApiKey) onXApiKey();
        else otherwise(Value);
    }
}
