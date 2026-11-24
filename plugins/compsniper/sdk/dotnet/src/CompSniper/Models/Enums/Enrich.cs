using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Adds public seller location, approximate sold-count evidence, and average ship time. Sold date, listed date, colors, description, category, and condition are already returned when present in the native search response. This still uses one CompSniper request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Enrich>))]
public sealed record Enrich : OpenStringEnum<Enrich>
{
    private Enrich(string value) : base(value)
    {
    }

    public static readonly Enrich True = new("true");

    public static readonly Enrich False = new("false");

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
