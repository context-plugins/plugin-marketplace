using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. Return documents with dataText in this format
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataTextFormat>))]
public sealed record DataTextFormat : OpenStringEnum<DataTextFormat>
{
    private DataTextFormat(string value) : base(value)
    {
    }

    public static readonly DataTextFormat Markdown = new("markdown");

    public static readonly DataTextFormat Html = new("html");

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
