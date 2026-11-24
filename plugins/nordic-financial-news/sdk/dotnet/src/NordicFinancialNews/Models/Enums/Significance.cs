using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// Editorial importance (omitted on a tombstone). <c>notable</c> = front-page-worthy; <c>routine</c> = factual ledger record; <c>commentary</c> = single-article opinion/analysis.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Significance>))]
public sealed record Significance : OpenStringEnum<Significance>
{
    private Significance(string value) : base(value)
    {
    }

    public static readonly Significance Notable = new("notable");

    public static readonly Significance Routine = new("routine");

    public static readonly Significance Commentary = new("commentary");

    public TResult Match<TResult>(Func<TResult> onNotable,
        Func<TResult> onRoutine,
        Func<TResult> onCommentary,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Notable => onNotable(),
            _ when this == Routine => onRoutine(),
            _ when this == Commentary => onCommentary(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotable, Action onRoutine, Action onCommentary, Action<string> otherwise)
    {
        if (this == Notable) onNotable();
        else if (this == Routine) onRoutine();
        else if (this == Commentary) onCommentary();
        else otherwise(Value);
    }
}
