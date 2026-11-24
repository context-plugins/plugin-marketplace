using System;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Enum;

namespace GoogleCloudApiGateway.Models.Enums;

/// <summary>
/// Output only. State of the API Config.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State1 Creating = new("CREATING");

    public static readonly State1 Active = new("ACTIVE");

    public static readonly State1 Failed = new("FAILED");

    public static readonly State1 Deleting = new("DELETING");

    public static readonly State1 Updating = new("UPDATING");

    public static readonly State1 Activating = new("ACTIVATING");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onFailed,
        Func<TResult> onDeleting,
        Func<TResult> onUpdating,
        Func<TResult> onActivating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Failed => onFailed(),
            _ when this == Deleting => onDeleting(),
            _ when this == Updating => onUpdating(),
            _ when this == Activating => onActivating(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onActive,
        Action onFailed,
        Action onDeleting,
        Action onUpdating,
        Action onActivating,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Failed) onFailed();
        else if (this == Deleting) onDeleting();
        else if (this == Updating) onUpdating();
        else if (this == Activating) onActivating();
        else otherwise(Value);
    }
}
