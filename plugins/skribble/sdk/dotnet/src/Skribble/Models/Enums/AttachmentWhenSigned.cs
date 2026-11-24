using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttachmentWhenSigned>))]
public sealed record AttachmentWhenSigned : OpenStringEnum<AttachmentWhenSigned>
{
    private AttachmentWhenSigned(string value) : base(value)
    {
    }

    public static readonly AttachmentWhenSigned SignedDocument = new("SIGNED_DOCUMENT");

    public static readonly AttachmentWhenSigned SignatureProtocol = new("SIGNATURE_PROTOCOL");

    public TResult Match<TResult>(Func<TResult> onSignedDocument,
        Func<TResult> onSignatureProtocol,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SignedDocument => onSignedDocument(),
            _ when this == SignatureProtocol => onSignatureProtocol(),
            _ => otherwise(Value)
        };

    public void Match(Action onSignedDocument, Action onSignatureProtocol, Action<string> otherwise)
    {
        if (this == SignedDocument) onSignedDocument();
        else if (this == SignatureProtocol) onSignatureProtocol();
        else otherwise(Value);
    }
}
