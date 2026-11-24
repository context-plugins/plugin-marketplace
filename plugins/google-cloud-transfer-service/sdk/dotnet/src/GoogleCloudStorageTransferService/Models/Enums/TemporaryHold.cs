using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TemporaryHold>))]
public sealed record TemporaryHold : OpenStringEnum<TemporaryHold>
{
    private TemporaryHold(string value) : base(value)
    {
    }

    public static readonly TemporaryHold TemporaryHoldUnspecified = new("TEMPORARY_HOLD_UNSPECIFIED");

    public static readonly TemporaryHold TemporaryHoldSkip = new("TEMPORARY_HOLD_SKIP");

    public static readonly TemporaryHold TemporaryHoldPreserve = new("TEMPORARY_HOLD_PRESERVE");

    public TResult Match<TResult>(Func<TResult> onTemporaryHoldUnspecified,
        Func<TResult> onTemporaryHoldSkip,
        Func<TResult> onTemporaryHoldPreserve,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TemporaryHoldUnspecified => onTemporaryHoldUnspecified(),
            _ when this == TemporaryHoldSkip => onTemporaryHoldSkip(),
            _ when this == TemporaryHoldPreserve => onTemporaryHoldPreserve(),
            _ => otherwise(Value)
        };

    public void Match(Action onTemporaryHoldUnspecified,
        Action onTemporaryHoldSkip,
        Action onTemporaryHoldPreserve,
        Action<string> otherwise)
    {
        if (this == TemporaryHoldUnspecified) onTemporaryHoldUnspecified();
        else if (this == TemporaryHoldSkip) onTemporaryHoldSkip();
        else if (this == TemporaryHoldPreserve) onTemporaryHoldPreserve();
        else otherwise(Value);
    }
}
