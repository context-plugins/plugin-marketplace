using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Current state of the rate plan (draft or published).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State7>))]
public sealed record State7 : OpenStringEnum<State7>
{
    private State7(string value) : base(value)
    {
    }

    public static readonly State7 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State7 Draft = new("DRAFT");

    public static readonly State7 Published = new("PUBLISHED");

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
