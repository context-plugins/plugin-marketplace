using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCallnodeIoFaxesApi>))]
public sealed record StatusCallnodeIoFaxesApi : OpenStringEnum<StatusCallnodeIoFaxesApi>
{
    private StatusCallnodeIoFaxesApi(string value) : base(value)
    {
    }

    public static readonly StatusCallnodeIoFaxesApi Queued = new("queued");

    public static readonly StatusCallnodeIoFaxesApi Dialing = new("dialing");

    public static readonly StatusCallnodeIoFaxesApi Transmitting = new("transmitting");

    public static readonly StatusCallnodeIoFaxesApi Receiving = new("receiving");

    public static readonly StatusCallnodeIoFaxesApi Completed = new("completed");

    public static readonly StatusCallnodeIoFaxesApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onDialing,
        Func<TResult> onTransmitting,
        Func<TResult> onReceiving,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Dialing => onDialing(),
            _ when this == Transmitting => onTransmitting(),
            _ when this == Receiving => onReceiving(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onDialing,
        Action onTransmitting,
        Action onReceiving,
        Action onCompleted,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Dialing) onDialing();
        else if (this == Transmitting) onTransmitting();
        else if (this == Receiving) onReceiving();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
