using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of markup language the raw content is to be interpreted in.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Markup>))]
public sealed record Markup : OpenStringEnum<Markup>
{
    private Markup(string value) : base(value)
    {
    }

    public static readonly Markup Markdown = new("markdown");

    public static readonly Markup Creole = new("creole");

    public static readonly Markup Plaintext = new("plaintext");

    public TResult Match<TResult>(Func<TResult> onMarkdown,
        Func<TResult> onCreole,
        Func<TResult> onPlaintext,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Markdown => onMarkdown(),
            _ when this == Creole => onCreole(),
            _ when this == Plaintext => onPlaintext(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarkdown, Action onCreole, Action onPlaintext, Action<string> otherwise)
    {
        if (this == Markdown) onMarkdown();
        else if (this == Creole) onCreole();
        else if (this == Plaintext) onPlaintext();
        else otherwise(Value);
    }
}
