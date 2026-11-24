using System;
using System.Text.Json.Serialization;
using Cosmic.Core.Enum;

namespace Cosmic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Published = new("published");

    public static readonly Status Draft = new("draft");

    public TResult Match<TResult>(Func<TResult> onPublished, Func<TResult> onDraft, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Published => onPublished(),
            _ when this == Draft => onDraft(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublished, Action onDraft, Action<string> otherwise)
    {
        if (this == Published) onPublished();
        else if (this == Draft) onDraft();
        else otherwise(Value);
    }
}
