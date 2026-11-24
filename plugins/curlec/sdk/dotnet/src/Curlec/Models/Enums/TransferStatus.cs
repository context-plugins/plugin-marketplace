using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Transfer processing status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransferStatus>))]
public sealed record TransferStatus : OpenStringEnum<TransferStatus>
{
    private TransferStatus(string value) : base(value)
    {
    }

    public static readonly TransferStatus Created = new("created");

    public static readonly TransferStatus Pending = new("pending");

    public static readonly TransferStatus Processed = new("processed");

    public static readonly TransferStatus Failed = new("failed");

    public static readonly TransferStatus Reversed = new("reversed");

    public static readonly TransferStatus PartiallyReversed = new("partially_reversed");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onPending,
        Func<TResult> onProcessed,
        Func<TResult> onFailed,
        Func<TResult> onReversed,
        Func<TResult> onPartiallyReversed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Pending => onPending(),
            _ when this == Processed => onProcessed(),
            _ when this == Failed => onFailed(),
            _ when this == Reversed => onReversed(),
            _ when this == PartiallyReversed => onPartiallyReversed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onPending,
        Action onProcessed,
        Action onFailed,
        Action onReversed,
        Action onPartiallyReversed,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Pending) onPending();
        else if (this == Processed) onProcessed();
        else if (this == Failed) onFailed();
        else if (this == Reversed) onReversed();
        else if (this == PartiallyReversed) onPartiallyReversed();
        else otherwise(Value);
    }
}
