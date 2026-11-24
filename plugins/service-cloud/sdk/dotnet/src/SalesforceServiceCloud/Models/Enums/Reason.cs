using System;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Enum;

namespace SalesforceServiceCloud.Models.Enums;

/// <summary>
/// Reason the session ended.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason ClientRequest = new("ClientRequest");

    public static readonly Reason TransferFailedNotConfigured = new("TransferFailedNotConfigured");

    public static readonly Reason Action = new("Action");

    public static readonly Reason Error = new("Error");

    public static readonly Reason InfiniteLoopDetected = new("InfiniteLoopDetected");

    public TResult Match<TResult>(Func<TResult> onClientRequest,
        Func<TResult> onTransferFailedNotConfigured,
        Func<TResult> onAction,
        Func<TResult> onError,
        Func<TResult> onInfiniteLoopDetected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClientRequest => onClientRequest(),
            _ when this == TransferFailedNotConfigured => onTransferFailedNotConfigured(),
            _ when this == Action => onAction(),
            _ when this == Error => onError(),
            _ when this == InfiniteLoopDetected => onInfiniteLoopDetected(),
            _ => otherwise(Value)
        };

    public void Match(Action onClientRequest,
        Action onTransferFailedNotConfigured,
        Action onAction,
        Action onError,
        Action onInfiniteLoopDetected,
        Action<string> otherwise)
    {
        if (this == ClientRequest) onClientRequest();
        else if (this == TransferFailedNotConfigured) onTransferFailedNotConfigured();
        else if (this == Action) onAction();
        else if (this == Error) onError();
        else if (this == InfiniteLoopDetected) onInfiniteLoopDetected();
        else otherwise(Value);
    }
}
