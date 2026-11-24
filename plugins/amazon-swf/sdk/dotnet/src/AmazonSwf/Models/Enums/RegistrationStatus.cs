using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// Specifies the registration status of the activity types to list.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RegistrationStatus>))]
public sealed record RegistrationStatus : OpenStringEnum<RegistrationStatus>
{
    private RegistrationStatus(string value) : base(value)
    {
    }

    public static readonly RegistrationStatus Registered = new("REGISTERED");

    public static readonly RegistrationStatus Deprecated = new("DEPRECATED");

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
