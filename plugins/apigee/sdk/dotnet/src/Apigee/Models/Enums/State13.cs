using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State13>))]
public sealed record State13 : OpenStringEnum<State13>
{
    private State13(string value) : base(value)
    {
    }

    public static readonly State13 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State13 Draft = new("DRAFT");

    public static readonly State13 Published = new("PUBLISHED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onDraft,
        Func<TResult> onPublished,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Draft => onDraft(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified, Action onDraft, Action onPublished, Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Draft) onDraft();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
