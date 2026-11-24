using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the backup.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State12>))]
public sealed record State12 : OpenStringEnum<State12>
{
    private State12(string value) : base(value)
    {
    }

    public static readonly State12 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State12 Creating = new("CREATING");

    public static readonly State12 Deleting = new("DELETING");

    public static readonly State12 Active = new("ACTIVE");

    public static readonly State12 Failed = new("FAILED");

    public static readonly State12 Restoring = new("RESTORING");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onDeleting,
        Func<TResult> onActive,
        Func<TResult> onFailed,
        Func<TResult> onRestoring,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Deleting => onDeleting(),
            _ when this == Active => onActive(),
            _ when this == Failed => onFailed(),
            _ when this == Restoring => onRestoring(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onDeleting,
        Action onActive,
        Action onFailed,
        Action onRestoring,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Deleting) onDeleting();
        else if (this == Active) onActive();
        else if (this == Failed) onFailed();
        else if (this == Restoring) onRestoring();
        else otherwise(Value);
    }
}
