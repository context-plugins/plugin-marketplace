using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. Specify the format of the content. Default is markdown. Use mdx when the content contains JSX-style Archbee components (&lt;hint&gt;, &lt;CtaButton /&gt;, &lt;Tabs&gt;); directive-style components (:::hint{type="info"}) work in both markdown and mdx.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Markdown = new("markdown");

    public static readonly Format Mdx = new("mdx");

    public static readonly Format Json = new("json");

    public TResult Match<TResult>(Func<TResult> onMarkdown,
        Func<TResult> onMdx,
        Func<TResult> onJson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Markdown => onMarkdown(),
            _ when this == Mdx => onMdx(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarkdown, Action onMdx, Action onJson, Action<string> otherwise)
    {
        if (this == Markdown) onMarkdown();
        else if (this == Mdx) onMdx();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
