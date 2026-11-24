using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// Shape of the extracted content when <c>extract</c> is true.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExtractFormat>))]
public sealed record ExtractFormat : OpenStringEnum<ExtractFormat>
{
    private ExtractFormat(string value) : base(value)
    {
    }

    public static readonly ExtractFormat Markdown = new("markdown");

    public static readonly ExtractFormat Json = new("json");

    public static readonly ExtractFormat Html = new("html");

    public static readonly ExtractFormat Text = new("text");

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
