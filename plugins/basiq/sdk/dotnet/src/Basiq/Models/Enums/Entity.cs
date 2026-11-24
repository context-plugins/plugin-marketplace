using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The entity associated with the event that has occurred
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Entity>))]
public sealed record Entity : OpenStringEnum<Entity>
{
    private Entity(string value) : base(value)
    {
    }

    public static readonly Entity Consent = new("consent");

    public static readonly Entity Connection = new("connection");

    public TResult Match<TResult>(Func<TResult> onConsent,
        Func<TResult> onConnection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Consent => onConsent(),
            _ when this == Connection => onConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onConsent, Action onConnection, Action<string> otherwise)
    {
        if (this == Consent) onConsent();
        else if (this == Connection) onConnection();
        else otherwise(Value);
    }
}
