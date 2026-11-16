using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The status of the uploaded evidence after it has been submitted to the issuing bank. This field reflects how the <c>Dispute</c> is moving forward following the <see href="/api/disputes/submitdisputeevidence">submission of dispute evidence</see>. For more information on challenging a <c>Dispute</c>, see <see href="/guides/after-the-payment/disputes/responding-to-disputes">Responding to Disputes</see>.
/// <para>
/// Possible values are:
/// - <c>INQUIRY</c>: Updated to this value if <c>Dispute#state</c> is <c>INQUIRY</c> at the time of submission.
/// - <c>CHARGEBACK</c>: Updated to this value if <c>Dispute#state</c> is <c>PENDING</c> at the time of submission.
/// - <c>NONE</c>: No evidence has been uploaded or submitted yet.
/// - <c>NOT_SUPPORTED</c>: The processor or dispute type (<c>Dispute#reason</c>) does not support evidence submission.
/// - <c>UNKNOWN</c>: Occurs if evidence details couldn't be successfully processed or retrieved.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EvidenceSubmitted>))]
public sealed record EvidenceSubmitted : OpenStringEnum<EvidenceSubmitted>
{
    private EvidenceSubmitted(string value) : base(value)
    {
    }

    public static readonly EvidenceSubmitted Inquiry = new("INQUIRY");

    public static readonly EvidenceSubmitted Chargeback = new("CHARGEBACK");

    public static readonly EvidenceSubmitted None = new("NONE");

    public static readonly EvidenceSubmitted NotSupported = new("NOT_SUPPORTED");

    public static readonly EvidenceSubmitted Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onInquiry,
        Func<TResult> onChargeback,
        Func<TResult> onNone,
        Func<TResult> onNotSupported,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inquiry => onInquiry(),
            _ when this == Chargeback => onChargeback(),
            _ when this == None => onNone(),
            _ when this == NotSupported => onNotSupported(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onInquiry,
        Action onChargeback,
        Action onNone,
        Action onNotSupported,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Inquiry) onInquiry();
        else if (this == Chargeback) onChargeback();
        else if (this == None) onNone();
        else if (this == NotSupported) onNotSupported();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
