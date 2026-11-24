using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The status of the domain: REGISTERED – The domain is properly registered and available. You can use this domain for registering types and creating new workflow executions. DEPRECATED – The domain was deprecated using DeprecateDomain, but is still in use. You should not create new workflow executions in this domain.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Registered = new("REGISTERED");

    public static readonly Status2 Deprecated = new("DEPRECATED");

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
