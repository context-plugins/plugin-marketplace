using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// true = add listedAt (the date Mercari shows as "Posted", ISO 8601 UTC) to each result. Slower: each listing is looked up separately. null when a date cannot be read.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IncludeListedAt>))]
public sealed record IncludeListedAt : OpenStringEnum<IncludeListedAt>
{
    private IncludeListedAt(string value) : base(value)
    {
    }

    public static readonly IncludeListedAt True = new("true");

    public static readonly IncludeListedAt False = new("false");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
