using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// How the extension was published
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PublishedAs>))]
public sealed record PublishedAs : OpenStringEnum<PublishedAs>
{
    private PublishedAs(string value) : base(value)
    {
    }

    public static readonly PublishedAs Global = new("Global");

    public static readonly PublishedAs Dev = new("Dev");

    public static readonly PublishedAs Pte = new("PTE");

    public TResult Match<TResult>(Func<TResult> onGlobal,
        Func<TResult> onDev,
        Func<TResult> onPte,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Global => onGlobal(),
            _ when this == Dev => onDev(),
            _ when this == Pte => onPte(),
            _ => otherwise(Value)
        };

    public void Match(Action onGlobal, Action onDev, Action onPte, Action<string> otherwise)
    {
        if (this == Global) onGlobal();
        else if (this == Dev) onDev();
        else if (this == Pte) onPte();
        else otherwise(Value);
    }
}
