using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FormatDeliverdDevKnowledgeApi>))]
public sealed record FormatDeliverdDevKnowledgeApi : OpenStringEnum<FormatDeliverdDevKnowledgeApi>
{
    private FormatDeliverdDevKnowledgeApi(string value) : base(value)
    {
    }

    public static readonly FormatDeliverdDevKnowledgeApi Markdown = new("markdown");

    public static readonly FormatDeliverdDevKnowledgeApi Json = new("json");

    public TResult Match<TResult>(Func<TResult> onMarkdown, Func<TResult> onJson, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Markdown => onMarkdown(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarkdown, Action onJson, Action<string> otherwise)
    {
        if (this == Markdown) onMarkdown();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
