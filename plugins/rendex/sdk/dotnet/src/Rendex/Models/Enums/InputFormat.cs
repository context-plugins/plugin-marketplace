using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// How to interpret <c>content</c>. 'markdown' is converted to styled HTML; 'html' is used as a body fragment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputFormat>))]
public sealed record InputFormat : OpenStringEnum<InputFormat>
{
    private InputFormat(string value) : base(value)
    {
    }

    public static readonly InputFormat Markdown = new("markdown");

    public static readonly InputFormat Html = new("html");

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
