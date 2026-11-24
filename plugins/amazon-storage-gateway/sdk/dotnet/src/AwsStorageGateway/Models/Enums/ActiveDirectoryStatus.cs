using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// Indicates the status of a gateway that is a member of the Active Directory domain. This field is only used as part of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication error. DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. NETWORK_ERROR: Indicates that JoinDomain operation failed due to
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActiveDirectoryStatus>))]
public sealed record ActiveDirectoryStatus : OpenStringEnum<ActiveDirectoryStatus>
{
    private ActiveDirectoryStatus(string value) : base(value)
    {
    }

    public static readonly ActiveDirectoryStatus AccessDenied = new("ACCESS_DENIED");

    public static readonly ActiveDirectoryStatus Detached = new("DETACHED");

    public static readonly ActiveDirectoryStatus Joined = new("JOINED");

    public static readonly ActiveDirectoryStatus Joining = new("JOINING");

    public static readonly ActiveDirectoryStatus NetworkError = new("NETWORK_ERROR");

    public static readonly ActiveDirectoryStatus Timeout = new("TIMEOUT");

    public static readonly ActiveDirectoryStatus UnknownError = new("UNKNOWN_ERROR");

    public static readonly ActiveDirectoryStatus InsufficientPermissions = new("INSUFFICIENT_PERMISSIONS");

    public TResult Match<TResult>(Func<TResult> onAccessDenied,
        Func<TResult> onDetached,
        Func<TResult> onJoined,
        Func<TResult> onJoining,
        Func<TResult> onNetworkError,
        Func<TResult> onTimeout,
        Func<TResult> onUnknownError,
        Func<TResult> onInsufficientPermissions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AccessDenied => onAccessDenied(),
            _ when this == Detached => onDetached(),
            _ when this == Joined => onJoined(),
            _ when this == Joining => onJoining(),
            _ when this == NetworkError => onNetworkError(),
            _ when this == Timeout => onTimeout(),
            _ when this == UnknownError => onUnknownError(),
            _ when this == InsufficientPermissions => onInsufficientPermissions(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccessDenied,
        Action onDetached,
        Action onJoined,
        Action onJoining,
        Action onNetworkError,
        Action onTimeout,
        Action onUnknownError,
        Action onInsufficientPermissions,
        Action<string> otherwise)
    {
        if (this == AccessDenied) onAccessDenied();
        else if (this == Detached) onDetached();
        else if (this == Joined) onJoined();
        else if (this == Joining) onJoining();
        else if (this == NetworkError) onNetworkError();
        else if (this == Timeout) onTimeout();
        else if (this == UnknownError) onUnknownError();
        else if (this == InsufficientPermissions) onInsufficientPermissions();
        else otherwise(Value);
    }
}
