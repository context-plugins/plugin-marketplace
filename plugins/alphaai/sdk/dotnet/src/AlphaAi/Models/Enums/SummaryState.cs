using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// <c>published</c>: the summary covers every article the story had when it was written. <c>stale</c>: articles joined since; the rewrite is queued. <c>preparing</c>: no summary yet — the texts are the lead article's own.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SummaryState>))]
public sealed record SummaryState : OpenStringEnum<SummaryState>
{
    private SummaryState(string value) : base(value)
    {
    }

    public static readonly SummaryState Published = new("published");

    public static readonly SummaryState Stale = new("stale");

    public static readonly SummaryState Preparing = new("preparing");

    public TResult Match<TResult>(Func<TResult> onPublished,
        Func<TResult> onStale,
        Func<TResult> onPreparing,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Published => onPublished(),
            _ when this == Stale => onStale(),
            _ when this == Preparing => onPreparing(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublished, Action onStale, Action onPreparing, Action<string> otherwise)
    {
        if (this == Published) onPublished();
        else if (this == Stale) onStale();
        else if (this == Preparing) onPreparing();
        else otherwise(Value);
    }
}
