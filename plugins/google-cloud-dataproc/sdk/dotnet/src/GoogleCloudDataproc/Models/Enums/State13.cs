using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the federation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State13>))]
public sealed record State13 : OpenStringEnum<State13>
{
    private State13(string value) : base(value)
    {
    }

    public static readonly State13 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State13 Creating = new("CREATING");

    public static readonly State13 Active = new("ACTIVE");

    public static readonly State13 Updating = new("UPDATING");

    public static readonly State13 Deleting = new("DELETING");

    public static readonly State13 Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onUpdating,
        Func<TResult> onDeleting,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Updating => onUpdating(),
            _ when this == Deleting => onDeleting(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onActive,
        Action onUpdating,
        Action onDeleting,
        Action onError,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Updating) onUpdating();
        else if (this == Deleting) onDeleting();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
