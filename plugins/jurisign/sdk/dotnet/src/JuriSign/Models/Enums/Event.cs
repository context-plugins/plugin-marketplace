using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event SignRequestSent = new("sign_request.sent");

    public static readonly Event SignRequestCompleted = new("sign_request.completed");

    public static readonly Event SignRequestCancelled = new("sign_request.cancelled");

    public static readonly Event SignerSigned = new("signer.signed");

    public static readonly Event SignerDeclined = new("signer.declined");

    public static readonly Event SignRequestRelaunched = new("sign_request.relaunched");

    public static readonly Event PublicFormSubmitted = new("public_form.submitted");

    public static readonly Event SignRequestSubmittedForApproval = new("sign_request.submitted_for_approval");

    public static readonly Event SignRequestApproved = new("sign_request.approved");

    public static readonly Event SignRequestRejected = new("sign_request.rejected");

    public static readonly Event PaymentCompleted = new("payment.completed");

    public static readonly Event PaymentFailed = new("payment.failed");

    public TResult Match<TResult>(Func<TResult> onSignRequestSent,
        Func<TResult> onSignRequestCompleted,
        Func<TResult> onSignRequestCancelled,
        Func<TResult> onSignerSigned,
        Func<TResult> onSignerDeclined,
        Func<TResult> onSignRequestRelaunched,
        Func<TResult> onPublicFormSubmitted,
        Func<TResult> onSignRequestSubmittedForApproval,
        Func<TResult> onSignRequestApproved,
        Func<TResult> onSignRequestRejected,
        Func<TResult> onPaymentCompleted,
        Func<TResult> onPaymentFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SignRequestSent => onSignRequestSent(),
            _ when this == SignRequestCompleted => onSignRequestCompleted(),
            _ when this == SignRequestCancelled => onSignRequestCancelled(),
            _ when this == SignerSigned => onSignerSigned(),
            _ when this == SignerDeclined => onSignerDeclined(),
            _ when this == SignRequestRelaunched => onSignRequestRelaunched(),
            _ when this == PublicFormSubmitted => onPublicFormSubmitted(),
            _ when this == SignRequestSubmittedForApproval => onSignRequestSubmittedForApproval(),
            _ when this == SignRequestApproved => onSignRequestApproved(),
            _ when this == SignRequestRejected => onSignRequestRejected(),
            _ when this == PaymentCompleted => onPaymentCompleted(),
            _ when this == PaymentFailed => onPaymentFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSignRequestSent,
        Action onSignRequestCompleted,
        Action onSignRequestCancelled,
        Action onSignerSigned,
        Action onSignerDeclined,
        Action onSignRequestRelaunched,
        Action onPublicFormSubmitted,
        Action onSignRequestSubmittedForApproval,
        Action onSignRequestApproved,
        Action onSignRequestRejected,
        Action onPaymentCompleted,
        Action onPaymentFailed,
        Action<string> otherwise)
    {
        if (this == SignRequestSent) onSignRequestSent();
        else if (this == SignRequestCompleted) onSignRequestCompleted();
        else if (this == SignRequestCancelled) onSignRequestCancelled();
        else if (this == SignerSigned) onSignerSigned();
        else if (this == SignerDeclined) onSignerDeclined();
        else if (this == SignRequestRelaunched) onSignRequestRelaunched();
        else if (this == PublicFormSubmitted) onPublicFormSubmitted();
        else if (this == SignRequestSubmittedForApproval) onSignRequestSubmittedForApproval();
        else if (this == SignRequestApproved) onSignRequestApproved();
        else if (this == SignRequestRejected) onSignRequestRejected();
        else if (this == PaymentCompleted) onPaymentCompleted();
        else if (this == PaymentFailed) onPaymentFailed();
        else otherwise(Value);
    }
}
