using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Draft = new("DRAFT");

    public static readonly Status2 Published = new("PUBLISHED");

    public static readonly Status2 Retired = new("RETIRED");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onPublished,
        Func<TResult> onRetired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Published => onPublished(),
            _ when this == Retired => onRetired(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onPublished, Action onRetired, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Published) onPublished();
        else if (this == Retired) onRetired();
        else otherwise(Value);
    }
}
