using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContentFormat3>))]
public sealed record ContentFormat3 : OpenStringEnum<ContentFormat3>
{
    private ContentFormat3(string value) : base(value)
    {
    }

    public static readonly ContentFormat3 Markdown = new("markdown");

    public static readonly ContentFormat3 Html = new("html");

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
