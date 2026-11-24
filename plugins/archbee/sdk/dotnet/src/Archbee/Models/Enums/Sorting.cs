using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. Specify the type of ordering for document insertion.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sorting>))]
public sealed record Sorting : OpenStringEnum<Sorting>
{
    private Sorting(string value) : base(value)
    {
    }

    public static readonly Sorting Alphabetical = new("alphabetical");

    public static readonly Sorting Chronological = new("chronological");

    public TResult Match<TResult>(Func<TResult> onAlphabetical,
        Func<TResult> onChronological,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Alphabetical => onAlphabetical(),
            _ when this == Chronological => onChronological(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlphabetical, Action onChronological, Action<string> otherwise)
    {
        if (this == Alphabetical) onAlphabetical();
        else if (this == Chronological) onChronological();
        else otherwise(Value);
    }
}
