using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentFormat>))]
public sealed record ContentFormat : OpenStringEnum<ContentFormat>
{
    private ContentFormat(string value) : base(value)
    {
    }

    public static readonly ContentFormat Markdown = new("markdown");

    public static readonly ContentFormat Html = new("html");

    public TResult Match<TResult>(Func<TResult> onMarkdown, Func<TResult> onHtml, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Markdown => onMarkdown(),
            _ when this == Html => onHtml(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarkdown, Action onHtml, Action<string> otherwise)
    {
        if (this == Markdown) onMarkdown();
        else if (this == Html) onHtml();
        else otherwise(Value);
    }
}
