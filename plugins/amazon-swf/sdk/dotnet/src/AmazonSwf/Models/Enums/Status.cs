using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The current status of the activity type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Registered = new("REGISTERED");

    public static readonly Status Deprecated = new("DEPRECATED");

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
