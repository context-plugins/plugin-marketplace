using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Determines whether the statement allows or denies access to the resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Effect>))]
public sealed record Effect : OpenStringEnum<Effect>
{
    private Effect(string value) : base(value)
    {
    }

    public static readonly Effect Allow = new("Allow");

    public static readonly Effect Deny = new("Deny");

    public TResult Match<TResult>(Func<TResult> onAllow, Func<TResult> onDeny, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allow => onAllow(),
            _ when this == Deny => onDeny(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllow, Action onDeny, Action<string> otherwise)
    {
        if (this == Allow) onAllow();
        else if (this == Deny) onDeny();
        else otherwise(Value);
    }
}
