using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The current status of the workflow type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Registered = new("REGISTERED");

    public static readonly Status3 Deprecated = new("DEPRECATED");

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
