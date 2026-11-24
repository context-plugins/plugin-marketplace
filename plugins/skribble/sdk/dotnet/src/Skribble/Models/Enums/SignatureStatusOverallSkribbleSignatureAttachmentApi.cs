using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// Overall signing status of the document.
/// <para>
/// Possible values:
///   - <b>OPEN</b> At least one user has not signed or declined their signature yet.
///   - <b>DECLINED</b> At least one user declined to sign. The signature request failed.
///   - <b>WITHDRAWN</b> The owner has withdrawn the signature request.
///   - <b>SIGNED</b> All users signed the document. The signature request was successfully completed.
///   - <b>EXPIRED</b> The owner-set <c>expires_at</c> date has passed before all signers signed. Terminal status.
///   - <b>ERROR</b> A technical error occurred. The signature request cannot be completed.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignatureStatusOverallSkribbleSignatureAttachmentApi>))]
public sealed record SignatureStatusOverallSkribbleSignatureAttachmentApi : OpenStringEnum<SignatureStatusOverallSkribbleSignatureAttachmentApi>
{
    private SignatureStatusOverallSkribbleSignatureAttachmentApi(string value) : base(value)
    {
    }

    public static readonly SignatureStatusOverallSkribbleSignatureAttachmentApi Open = new("OPEN");

    public static readonly SignatureStatusOverallSkribbleSignatureAttachmentApi Declined = new("DECLINED");

    public static readonly SignatureStatusOverallSkribbleSignatureAttachmentApi Withdrawn = new("WITHDRAWN");

    public static readonly SignatureStatusOverallSkribbleSignatureAttachmentApi Signed = new("SIGNED");

    public static readonly SignatureStatusOverallSkribbleSignatureAttachmentApi Expired = new("EXPIRED");

    public static readonly SignatureStatusOverallSkribbleSignatureAttachmentApi Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onDeclined,
        Func<TResult> onWithdrawn,
        Func<TResult> onSigned,
        Func<TResult> onExpired,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Declined => onDeclined(),
            _ when this == Withdrawn => onWithdrawn(),
            _ when this == Signed => onSigned(),
            _ when this == Expired => onExpired(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onDeclined,
        Action onWithdrawn,
        Action onSigned,
        Action onExpired,
        Action onError,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Declined) onDeclined();
        else if (this == Withdrawn) onWithdrawn();
        else if (this == Signed) onSigned();
        else if (this == Expired) onExpired();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
