using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Qfield>))]
public sealed record Qfield : OpenStringEnum<Qfield>
{
    private Qfield(string value) : base(value)
    {
    }

    public static readonly Qfield Title = new("TITLE");

    public static readonly Qfield Description = new("DESCRIPTION");

    public static readonly Qfield Content = new("CONTENT");

    public static readonly Qfield Summary = new("SUMMARY");

    public TResult Match<TResult>(Func<TResult> onTitle,
        Func<TResult> onDescription,
        Func<TResult> onContent,
        Func<TResult> onSummary,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Title => onTitle(),
            _ when this == Description => onDescription(),
            _ when this == Content => onContent(),
            _ when this == Summary => onSummary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTitle,
        Action onDescription,
        Action onContent,
        Action onSummary,
        Action<string> otherwise)
    {
        if (this == Title) onTitle();
        else if (this == Description) onDescription();
        else if (this == Content) onContent();
        else if (this == Summary) onSummary();
        else otherwise(Value);
    }
}
