using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// Specifies the registration status of the domains to list.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RegistrationStatus1>))]
public sealed record RegistrationStatus1 : OpenStringEnum<RegistrationStatus1>
{
    private RegistrationStatus1(string value) : base(value)
    {
    }

    public static readonly RegistrationStatus1 Registered = new("REGISTERED");

    public static readonly RegistrationStatus1 Deprecated = new("DEPRECATED");

    public TResult Match<TResult>(Func<TResult> onRegistered,
        Func<TResult> onDeprecated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Registered => onRegistered(),
            _ when this == Deprecated => onDeprecated(),
            _ => otherwise(Value)
        };

    public void Match(Action onRegistered, Action onDeprecated, Action<string> otherwise)
    {
        if (this == Registered) onRegistered();
        else if (this == Deprecated) onDeprecated();
        else otherwise(Value);
    }
}
