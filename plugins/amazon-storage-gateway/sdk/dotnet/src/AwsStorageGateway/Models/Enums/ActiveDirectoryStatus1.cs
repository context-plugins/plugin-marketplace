using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// Indicates the status of the gateway as a member of the Active Directory domain. This field is only used as part of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication error. DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. INSUFFICIENT_PERMISSIONS: Indicates that the JoinDomain operation f
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActiveDirectoryStatus1>))]
public sealed record ActiveDirectoryStatus1 : OpenStringEnum<ActiveDirectoryStatus1>
{
    private ActiveDirectoryStatus1(string value) : base(value)
    {
    }

    public static readonly ActiveDirectoryStatus1 AccessDenied = new("ACCESS_DENIED");

    public static readonly ActiveDirectoryStatus1 Detached = new("DETACHED");

    public static readonly ActiveDirectoryStatus1 Joined = new("JOINED");

    public static readonly ActiveDirectoryStatus1 Joining = new("JOINING");

    public static readonly ActiveDirectoryStatus1 NetworkError = new("NETWORK_ERROR");

    public static readonly ActiveDirectoryStatus1 Timeout = new("TIMEOUT");

    public static readonly ActiveDirectoryStatus1 UnknownError = new("UNKNOWN_ERROR");

    public static readonly ActiveDirectoryStatus1 InsufficientPermissions = new("INSUFFICIENT_PERMISSIONS");

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
