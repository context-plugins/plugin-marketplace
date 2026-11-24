using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// The state of a signature.
/// <para>
/// Possible values:
///   - <b>OPEN</b> Waiting for the user to sign a signature.
///   - <b>WAITING</b> The signer is waiting for a preceding signer in the sequence to complete.
///   - <b>DECLINED</b> The user declined to sign.
///   - <b>WITHDRAWN</b> The owner has withdrawn the signature request.
///   - <b>SIGNED</b> The user signed the document.
///   - <b>ERROR</b> A technical error occurred.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignatureStatusCodeSkribbleSignatureAttachmentApi>))]
public sealed record SignatureStatusCodeSkribbleSignatureAttachmentApi : OpenStringEnum<SignatureStatusCodeSkribbleSignatureAttachmentApi>
{
    private SignatureStatusCodeSkribbleSignatureAttachmentApi(string value) : base(value)
    {
    }

    public static readonly SignatureStatusCodeSkribbleSignatureAttachmentApi Open = new("OPEN");

    public static readonly SignatureStatusCodeSkribbleSignatureAttachmentApi Waiting = new("WAITING");

    public static readonly SignatureStatusCodeSkribbleSignatureAttachmentApi Declined = new("DECLINED");

    public static readonly SignatureStatusCodeSkribbleSignatureAttachmentApi Withdrawn = new("WITHDRAWN");

    public static readonly SignatureStatusCodeSkribbleSignatureAttachmentApi Signed = new("SIGNED");

    public static readonly SignatureStatusCodeSkribbleSignatureAttachmentApi Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onWaiting,
        Func<TResult> onDeclined,
        Func<TResult> onWithdrawn,
        Func<TResult> onSigned,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Waiting => onWaiting(),
            _ when this == Declined => onDeclined(),
            _ when this == Withdrawn => onWithdrawn(),
            _ when this == Signed => onSigned(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onWaiting,
        Action onDeclined,
        Action onWithdrawn,
        Action onSigned,
        Action onError,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Waiting) onWaiting();
        else if (this == Declined) onDeclined();
        else if (this == Withdrawn) onWithdrawn();
        else if (this == Signed) onSigned();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
