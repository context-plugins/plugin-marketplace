using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Placement of null values in sorted results. Accepts first or last.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Nulls>))]
public sealed record Nulls : OpenStringEnum<Nulls>
{
    private Nulls(string value) : base(value)
    {
    }

    public static readonly Nulls First = new("first");

    public static readonly Nulls Last = new("last");

    public TResult Match<TResult>(Func<TResult> onFirst, Func<TResult> onLast, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == First => onFirst(),
            _ when this == Last => onLast(),
            _ => otherwise(Value)
        };

    public void Match(Action onFirst, Action onLast, Action<string> otherwise)
    {
        if (this == First) onFirst();
        else if (this == Last) onLast();
        else otherwise(Value);
    }
}
