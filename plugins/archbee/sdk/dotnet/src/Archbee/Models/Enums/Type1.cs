using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// Type of import file. Only markdown supported for now on this route.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Markdown = new("markdown");

    public TResult Match<TResult>(Func<TResult> onMarkdown, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Markdown => onMarkdown(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarkdown, Action<string> otherwise)
    {
        if (this == Markdown) onMarkdown();
        else otherwise(Value);
    }
}
