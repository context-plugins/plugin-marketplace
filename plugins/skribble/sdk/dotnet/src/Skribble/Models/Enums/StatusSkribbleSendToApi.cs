using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// Status of the Send-To request
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusSkribbleSendToApi>))]
public sealed record StatusSkribbleSendToApi : OpenStringEnum<StatusSkribbleSendToApi>
{
    private StatusSkribbleSendToApi(string value) : base(value)
    {
    }

    public static readonly StatusSkribbleSendToApi Unclaimed = new("UNCLAIMED");

    public static readonly StatusSkribbleSendToApi Expired = new("EXPIRED");

    public static readonly StatusSkribbleSendToApi Claimed = new("CLAIMED");

    public static readonly StatusSkribbleSendToApi Signing = new("SIGNING");

    public static readonly StatusSkribbleSendToApi Signed = new("SIGNED");

    public static readonly StatusSkribbleSendToApi Withdrawn = new("WITHDRAWN");

    public static readonly StatusSkribbleSendToApi Declined = new("DECLINED");

    public TResult Match<TResult>(Func<TResult> onUnclaimed,
        Func<TResult> onExpired,
        Func<TResult> onClaimed,
        Func<TResult> onSigning,
        Func<TResult> onSigned,
        Func<TResult> onWithdrawn,
        Func<TResult> onDeclined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unclaimed => onUnclaimed(),
            _ when this == Expired => onExpired(),
            _ when this == Claimed => onClaimed(),
            _ when this == Signing => onSigning(),
            _ when this == Signed => onSigned(),
            _ when this == Withdrawn => onWithdrawn(),
            _ when this == Declined => onDeclined(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnclaimed,
        Action onExpired,
        Action onClaimed,
        Action onSigning,
        Action onSigned,
        Action onWithdrawn,
        Action onDeclined,
        Action<string> otherwise)
    {
        if (this == Unclaimed) onUnclaimed();
        else if (this == Expired) onExpired();
        else if (this == Claimed) onClaimed();
        else if (this == Signing) onSigning();
        else if (this == Signed) onSigned();
        else if (this == Withdrawn) onWithdrawn();
        else if (this == Declined) onDeclined();
        else otherwise(Value);
    }
}
