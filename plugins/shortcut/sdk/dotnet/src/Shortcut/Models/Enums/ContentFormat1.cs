using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// Format of the content being sent. Defaults to 'html'. If 'markdown', content will be converted to HTML for storage. Storage is always HTML; this parameter just tells us what format you're sending.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentFormat1>))]
public sealed record ContentFormat1 : OpenStringEnum<ContentFormat1>
{
    private ContentFormat1(string value) : base(value)
    {
    }

    public static readonly ContentFormat1 Markdown = new("markdown");

    public static readonly ContentFormat1 Html = new("html");

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
