using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Additional information about a compute fleet. Valid values include: CREATE_FAILED: The compute fleet has failed to create. UPDATE_FAILED: The compute fleet has failed to update.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Context>))]
public sealed record Context : OpenStringEnum<Context>
{
    private Context(string value) : base(value)
    {
    }

    public static readonly Context CreateFailed = new("CREATE_FAILED");

    public static readonly Context UpdateFailed = new("UPDATE_FAILED");

    public static readonly Context ActionRequired = new("ACTION_REQUIRED");

    public static readonly Context PendingDeletion = new("PENDING_DELETION");

    public static readonly Context InsufficientCapacity = new("INSUFFICIENT_CAPACITY");

    public TResult Match<TResult>(Func<TResult> onCreateFailed,
        Func<TResult> onUpdateFailed,
        Func<TResult> onActionRequired,
        Func<TResult> onPendingDeletion,
        Func<TResult> onInsufficientCapacity,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreateFailed => onCreateFailed(),
            _ when this == UpdateFailed => onUpdateFailed(),
            _ when this == ActionRequired => onActionRequired(),
            _ when this == PendingDeletion => onPendingDeletion(),
            _ when this == InsufficientCapacity => onInsufficientCapacity(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreateFailed,
        Action onUpdateFailed,
        Action onActionRequired,
        Action onPendingDeletion,
        Action onInsufficientCapacity,
        Action<string> otherwise)
    {
        if (this == CreateFailed) onCreateFailed();
        else if (this == UpdateFailed) onUpdateFailed();
        else if (this == ActionRequired) onActionRequired();
        else if (this == PendingDeletion) onPendingDeletion();
        else if (this == InsufficientCapacity) onInsufficientCapacity();
        else otherwise(Value);
    }
}
