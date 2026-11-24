using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

/// <summary>
/// Configured receiver-authentication mode. The credential is never returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Authentication1>))]
public sealed record Authentication1 : OpenStringEnum<Authentication1>
{
    private Authentication1(string value) : base(value)
    {
    }

    public static readonly Authentication1 None = new("none");

    public static readonly Authentication1 Bearer = new("bearer");

    public static readonly Authentication1 XApiKey = new("x-api-key");

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
