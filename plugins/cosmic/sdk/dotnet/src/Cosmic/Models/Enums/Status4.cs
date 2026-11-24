using System;
using System.Text.Json.Serialization;
using Cosmic.Core.Enum;

namespace Cosmic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status4>))]
public sealed record Status4 : OpenStringEnum<Status4>
{
    private Status4(string value) : base(value)
    {
    }

    public static readonly Status4 Published = new("published");

    public static readonly Status4 Draft = new("draft");

    public static readonly Status4 Any = new("any");

    public TResult Match<TResult>(Func<TResult> onPublished,
        Func<TResult> onDraft,
        Func<TResult> onAny,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Published => onPublished(),
            _ when this == Draft => onDraft(),
            _ when this == Any => onAny(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublished, Action onDraft, Action onAny, Action<string> otherwise)
    {
        if (this == Published) onPublished();
        else if (this == Draft) onDraft();
        else if (this == Any) onAny();
        else otherwise(Value);
    }
}
