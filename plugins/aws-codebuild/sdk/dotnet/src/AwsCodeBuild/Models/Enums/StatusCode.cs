using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The status code of the compute fleet. Valid values include: CREATING: The compute fleet is being created. UPDATING: The compute fleet is being updated. ROTATING: The compute fleet is being rotated. PENDING_DELETION: The compute fleet is pending deletion. DELETING: The compute fleet is being deleted. CREATE_FAILED: The compute fleet has failed to create. UPDATE_ROLLBACK_FAILED: The compute fleet has failed to update and could not rollback to previous state. ACTIVE: The compute fleet has succeeded and is active.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusCode>))]
public sealed record StatusCode : OpenStringEnum<StatusCode>
{
    private StatusCode(string value) : base(value)
    {
    }

    public static readonly StatusCode Creating = new("CREATING");

    public static readonly StatusCode Updating = new("UPDATING");

    public static readonly StatusCode Rotating = new("ROTATING");

    public static readonly StatusCode PendingDeletion = new("PENDING_DELETION");

    public static readonly StatusCode Deleting = new("DELETING");

    public static readonly StatusCode CreateFailed = new("CREATE_FAILED");

    public static readonly StatusCode UpdateRollbackFailed = new("UPDATE_ROLLBACK_FAILED");

    public static readonly StatusCode Active = new("ACTIVE");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onUpdating,
        Func<TResult> onRotating,
        Func<TResult> onPendingDeletion,
        Func<TResult> onDeleting,
        Func<TResult> onCreateFailed,
        Func<TResult> onUpdateRollbackFailed,
        Func<TResult> onActive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Updating => onUpdating(),
            _ when this == Rotating => onRotating(),
            _ when this == PendingDeletion => onPendingDeletion(),
            _ when this == Deleting => onDeleting(),
            _ when this == CreateFailed => onCreateFailed(),
            _ when this == UpdateRollbackFailed => onUpdateRollbackFailed(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onUpdating,
        Action onRotating,
        Action onPendingDeletion,
        Action onDeleting,
        Action onCreateFailed,
        Action onUpdateRollbackFailed,
        Action onActive,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Updating) onUpdating();
        else if (this == Rotating) onRotating();
        else if (this == PendingDeletion) onPendingDeletion();
        else if (this == Deleting) onDeleting();
        else if (this == CreateFailed) onCreateFailed();
        else if (this == UpdateRollbackFailed) onUpdateRollbackFailed();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
