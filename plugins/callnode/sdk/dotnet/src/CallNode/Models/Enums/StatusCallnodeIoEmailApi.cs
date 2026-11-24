using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCallnodeIoEmailApi>))]
public sealed record StatusCallnodeIoEmailApi : OpenStringEnum<StatusCallnodeIoEmailApi>
{
    private StatusCallnodeIoEmailApi(string value) : base(value)
    {
    }

    public static readonly StatusCallnodeIoEmailApi Pending = new("pending");

    public static readonly StatusCallnodeIoEmailApi Verifying = new("verifying");

    public static readonly StatusCallnodeIoEmailApi Active = new("active");

    public static readonly StatusCallnodeIoEmailApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onVerifying,
        Func<TResult> onActive,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Verifying => onVerifying(),
            _ when this == Active => onActive(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onVerifying, Action onActive, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Verifying) onVerifying();
        else if (this == Active) onActive();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
