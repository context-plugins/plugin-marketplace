using System;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Enum;

namespace GoogleCloudSpeechToText.Models.Enums;

/// <summary>
/// Output only. The CustomClass lifecycle state. This field is not used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State Active = new("ACTIVE");

    public static readonly State Deleted = new("DELETED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onActive,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Active => onActive(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified, Action onActive, Action onDeleted, Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Active) onActive();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
