using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExtractFormat1>))]
public sealed record ExtractFormat1 : OpenStringEnum<ExtractFormat1>
{
    private ExtractFormat1(string value) : base(value)
    {
    }

    public static readonly ExtractFormat1 Markdown = new("markdown");

    public static readonly ExtractFormat1 Json = new("json");

    public static readonly ExtractFormat1 Html = new("html");

    public static readonly ExtractFormat1 Text = new("text");

    public TResult Match<TResult>(Func<TResult> onMarkdown,
        Func<TResult> onJson,
        Func<TResult> onHtml,
        Func<TResult> onText,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Markdown => onMarkdown(),
            _ when this == Json => onJson(),
            _ when this == Html => onHtml(),
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarkdown, Action onJson, Action onHtml, Action onText, Action<string> otherwise)
    {
        if (this == Markdown) onMarkdown();
        else if (this == Json) onJson();
        else if (this == Html) onHtml();
        else if (this == Text) onText();
        else otherwise(Value);
    }
}
