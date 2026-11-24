using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Draft = new("draft");

    public static readonly Status Published = new("published");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onPublished, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onPublished, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
