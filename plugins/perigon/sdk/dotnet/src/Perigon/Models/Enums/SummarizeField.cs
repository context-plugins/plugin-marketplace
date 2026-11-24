using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SummarizeField>))]
public sealed record SummarizeField : OpenStringEnum<SummarizeField>
{
    private SummarizeField(string value) : base(value)
    {
    }

    public static readonly SummarizeField Title = new("TITLE");

    public static readonly SummarizeField Content = new("CONTENT");

    public static readonly SummarizeField Summary = new("SUMMARY");

    public TResult Match<TResult>(Func<TResult> onTitle,
        Func<TResult> onContent,
        Func<TResult> onSummary,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Title => onTitle(),
            _ when this == Content => onContent(),
            _ when this == Summary => onSummary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTitle, Action onContent, Action onSummary, Action<string> otherwise)
    {
        if (this == Title) onTitle();
        else if (this == Content) onContent();
        else if (this == Summary) onSummary();
        else otherwise(Value);
    }
}
