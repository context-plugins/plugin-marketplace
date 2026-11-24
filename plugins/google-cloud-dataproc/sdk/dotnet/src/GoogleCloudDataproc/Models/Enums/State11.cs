using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the metastore service.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State11>))]
public sealed record State11 : OpenStringEnum<State11>
{
    private State11(string value) : base(value)
    {
    }

    public static readonly State11 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State11 Creating = new("CREATING");

    public static readonly State11 Active = new("ACTIVE");

    public static readonly State11 Suspending = new("SUSPENDING");

    public static readonly State11 Suspended = new("SUSPENDED");

    public static readonly State11 Updating = new("UPDATING");

    public static readonly State11 Deleting = new("DELETING");

    public static readonly State11 Error = new("ERROR");

    public static readonly State11 Autoscaling = new("AUTOSCALING");

    public static readonly State11 Migrating = new("MIGRATING");

    public static readonly State11 Proxy = new("PROXY");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onSuspending,
        Func<TResult> onSuspended,
        Func<TResult> onUpdating,
        Func<TResult> onDeleting,
        Func<TResult> onError,
        Func<TResult> onAutoscaling,
        Func<TResult> onMigrating,
        Func<TResult> onProxy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Suspending => onSuspending(),
            _ when this == Suspended => onSuspended(),
            _ when this == Updating => onUpdating(),
            _ when this == Deleting => onDeleting(),
            _ when this == Error => onError(),
            _ when this == Autoscaling => onAutoscaling(),
            _ when this == Migrating => onMigrating(),
            _ when this == Proxy => onProxy(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onActive,
        Action onSuspending,
        Action onSuspended,
        Action onUpdating,
        Action onDeleting,
        Action onError,
        Action onAutoscaling,
        Action onMigrating,
        Action onProxy,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Suspending) onSuspending();
        else if (this == Suspended) onSuspended();
        else if (this == Updating) onUpdating();
        else if (this == Deleting) onDeleting();
        else if (this == Error) onError();
        else if (this == Autoscaling) onAutoscaling();
        else if (this == Migrating) onMigrating();
        else if (this == Proxy) onProxy();
        else otherwise(Value);
    }
}
