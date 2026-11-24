using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// The Match Booster region to run the enrichment in. Defaults to the
/// model's configured region.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Region>))]
public sealed record Region : OpenStringEnum<Region>
{
    private Region(string value) : base(value)
    {
    }

    public static readonly Region Us = new("us");

    public static readonly Region Eu = new("eu");

    public TResult Match<TResult>(Func<TResult> onUs, Func<TResult> onEu, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Us => onUs(),
            _ when this == Eu => onEu(),
            _ => otherwise(Value)
        };

    public void Match(Action onUs, Action onEu, Action<string> otherwise)
    {
        if (this == Us) onUs();
        else if (this == Eu) onEu();
        else otherwise(Value);
    }
}
