using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status5>))]
public sealed record Status5 : OpenStringEnum<Status5>
{
    private Status5(string value) : base(value)
    {
    }

    public static readonly Status5 Draft = new("DRAFT");

    public static readonly Status5 Scheduled = new("SCHEDULED");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onScheduled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Scheduled => onScheduled(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onScheduled, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Scheduled) onScheduled();
        else otherwise(Value);
    }
}
