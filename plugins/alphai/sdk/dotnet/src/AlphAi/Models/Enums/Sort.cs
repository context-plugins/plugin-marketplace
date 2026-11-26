using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// <c>relevance</c> (ranked) or <c>published</c> (newest first) — the latter when every word is too common to rank on.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort Relevance = new("relevance");

    public static readonly Sort Published = new("published");

    public TResult Match<TResult>(Func<TResult> onRelevance,
        Func<TResult> onPublished,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Relevance => onRelevance(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelevance, Action onPublished, Action<string> otherwise)
    {
        if (this == Relevance) onRelevance();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
