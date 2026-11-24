using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Outcome of processing this batch item.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResellerHandshakeStatus>))]
public sealed record ResellerHandshakeStatus : OpenStringEnum<ResellerHandshakeStatus>
{
    private ResellerHandshakeStatus(string value) : base(value)
    {
    }

    public static readonly ResellerHandshakeStatus HandshakeIssued = new("handshake_issued");

    public static readonly ResellerHandshakeStatus NoOp = new("no_op");

    public static readonly ResellerHandshakeStatus Mapped = new("mapped");

    public static readonly ResellerHandshakeStatus Remapped = new("remapped");

    public static readonly ResellerHandshakeStatus Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onHandshakeIssued,
        Func<TResult> onNoOp,
        Func<TResult> onMapped,
        Func<TResult> onRemapped,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HandshakeIssued => onHandshakeIssued(),
            _ when this == NoOp => onNoOp(),
            _ when this == Mapped => onMapped(),
            _ when this == Remapped => onRemapped(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onHandshakeIssued,
        Action onNoOp,
        Action onMapped,
        Action onRemapped,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == HandshakeIssued) onHandshakeIssued();
        else if (this == NoOp) onNoOp();
        else if (this == Mapped) onMapped();
        else if (this == Remapped) onRemapped();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
