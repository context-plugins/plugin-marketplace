using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Sets the value of the GraphQL API to public (GLOBAL) or private (PRIVATE). If no value is provided, the visibility will be set to GLOBAL by default. This value cannot be changed once the API has been created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Visibility>))]
public sealed record Visibility : OpenStringEnum<Visibility>
{
    private Visibility(string value) : base(value)
    {
    }

    public static readonly Visibility Global = new("GLOBAL");

    public static readonly Visibility Private = new("PRIVATE");

    public TResult Match<TResult>(Func<TResult> onGlobal, Func<TResult> onPrivate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Global => onGlobal(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onGlobal, Action onPrivate, Action<string> otherwise)
    {
        if (this == Global) onGlobal();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
