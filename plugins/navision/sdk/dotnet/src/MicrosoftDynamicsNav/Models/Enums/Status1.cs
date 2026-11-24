using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

/// <summary>
/// Current status of the environment
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 NotReady = new("NotReady");

    public static readonly Status1 Removing = new("Removing");

    public static readonly Status1 Preparing = new("Preparing");

    public static readonly Status1 Active = new("Active");

    public static readonly Status1 Upgrading = new("Upgrading");

    public static readonly Status1 CreatingFailed = new("CreatingFailed");

    public static readonly Status1 RemovingFailed = new("RemovingFailed");

    public static readonly Status1 SoftDeleting = new("SoftDeleting");

    public static readonly Status1 SoftDeletingFailed = new("SoftDeletingFailed");

    public static readonly Status1 SoftDeleted = new("SoftDeleted");

    public static readonly Status1 Recovering = new("Recovering");

    public static readonly Status1 RecoveringFailed = new("RecoveringFailed");

    public TResult Match<TResult>(Func<TResult> onNotReady,
        Func<TResult> onRemoving,
        Func<TResult> onPreparing,
        Func<TResult> onActive,
        Func<TResult> onUpgrading,
        Func<TResult> onCreatingFailed,
        Func<TResult> onRemovingFailed,
        Func<TResult> onSoftDeleting,
        Func<TResult> onSoftDeletingFailed,
        Func<TResult> onSoftDeleted,
        Func<TResult> onRecovering,
        Func<TResult> onRecoveringFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotReady => onNotReady(),
            _ when this == Removing => onRemoving(),
            _ when this == Preparing => onPreparing(),
            _ when this == Active => onActive(),
            _ when this == Upgrading => onUpgrading(),
            _ when this == CreatingFailed => onCreatingFailed(),
            _ when this == RemovingFailed => onRemovingFailed(),
            _ when this == SoftDeleting => onSoftDeleting(),
            _ when this == SoftDeletingFailed => onSoftDeletingFailed(),
            _ when this == SoftDeleted => onSoftDeleted(),
            _ when this == Recovering => onRecovering(),
            _ when this == RecoveringFailed => onRecoveringFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotReady,
        Action onRemoving,
        Action onPreparing,
        Action onActive,
        Action onUpgrading,
        Action onCreatingFailed,
        Action onRemovingFailed,
        Action onSoftDeleting,
        Action onSoftDeletingFailed,
        Action onSoftDeleted,
        Action onRecovering,
        Action onRecoveringFailed,
        Action<string> otherwise)
    {
        if (this == NotReady) onNotReady();
        else if (this == Removing) onRemoving();
        else if (this == Preparing) onPreparing();
        else if (this == Active) onActive();
        else if (this == Upgrading) onUpgrading();
        else if (this == CreatingFailed) onCreatingFailed();
        else if (this == RemovingFailed) onRemovingFailed();
        else if (this == SoftDeleting) onSoftDeleting();
        else if (this == SoftDeletingFailed) onSoftDeletingFailed();
        else if (this == SoftDeleted) onSoftDeleted();
        else if (this == Recovering) onRecovering();
        else if (this == RecoveringFailed) onRecoveringFailed();
        else otherwise(Value);
    }
}
