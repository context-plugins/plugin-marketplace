using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The reason that a renewal request was unsuccessful.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RenewalStatusReason>))]
public sealed record RenewalStatusReason : OpenStringEnum<RenewalStatusReason>
{
    private RenewalStatusReason(string value) : base(value)
    {
    }

    public static readonly RenewalStatusReason NoAvailableContacts = new("NO_AVAILABLE_CONTACTS");

    public static readonly RenewalStatusReason AdditionalVerificationRequired = new("ADDITIONAL_VERIFICATION_REQUIRED");

    public static readonly RenewalStatusReason DomainNotAllowed = new("DOMAIN_NOT_ALLOWED");

    public static readonly RenewalStatusReason InvalidPublicDomain = new("INVALID_PUBLIC_DOMAIN");

    public static readonly RenewalStatusReason DomainValidationDenied = new("DOMAIN_VALIDATION_DENIED");

    public static readonly RenewalStatusReason CaaError = new("CAA_ERROR");

    public static readonly RenewalStatusReason PcaLimitExceeded = new("PCA_LIMIT_EXCEEDED");

    public static readonly RenewalStatusReason PcaInvalidArn = new("PCA_INVALID_ARN");

    public static readonly RenewalStatusReason PcaInvalidState = new("PCA_INVALID_STATE");

    public static readonly RenewalStatusReason PcaRequestFailed = new("PCA_REQUEST_FAILED");

    public static readonly RenewalStatusReason PcaNameConstraintsValidation = new("PCA_NAME_CONSTRAINTS_VALIDATION");

    public static readonly RenewalStatusReason PcaResourceNotFound = new("PCA_RESOURCE_NOT_FOUND");

    public static readonly RenewalStatusReason PcaInvalidArgs = new("PCA_INVALID_ARGS");

    public static readonly RenewalStatusReason PcaInvalidDuration = new("PCA_INVALID_DURATION");

    public static readonly RenewalStatusReason PcaAccessDenied = new("PCA_ACCESS_DENIED");

    public static readonly RenewalStatusReason SlrNotFound = new("SLR_NOT_FOUND");

    public static readonly RenewalStatusReason Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onNoAvailableContacts,
        Func<TResult> onAdditionalVerificationRequired,
        Func<TResult> onDomainNotAllowed,
        Func<TResult> onInvalidPublicDomain,
        Func<TResult> onDomainValidationDenied,
        Func<TResult> onCaaError,
        Func<TResult> onPcaLimitExceeded,
        Func<TResult> onPcaInvalidArn,
        Func<TResult> onPcaInvalidState,
        Func<TResult> onPcaRequestFailed,
        Func<TResult> onPcaNameConstraintsValidation,
        Func<TResult> onPcaResourceNotFound,
        Func<TResult> onPcaInvalidArgs,
        Func<TResult> onPcaInvalidDuration,
        Func<TResult> onPcaAccessDenied,
        Func<TResult> onSlrNotFound,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoAvailableContacts => onNoAvailableContacts(),
            _ when this == AdditionalVerificationRequired => onAdditionalVerificationRequired(),
            _ when this == DomainNotAllowed => onDomainNotAllowed(),
            _ when this == InvalidPublicDomain => onInvalidPublicDomain(),
            _ when this == DomainValidationDenied => onDomainValidationDenied(),
            _ when this == CaaError => onCaaError(),
            _ when this == PcaLimitExceeded => onPcaLimitExceeded(),
            _ when this == PcaInvalidArn => onPcaInvalidArn(),
            _ when this == PcaInvalidState => onPcaInvalidState(),
            _ when this == PcaRequestFailed => onPcaRequestFailed(),
            _ when this == PcaNameConstraintsValidation => onPcaNameConstraintsValidation(),
            _ when this == PcaResourceNotFound => onPcaResourceNotFound(),
            _ when this == PcaInvalidArgs => onPcaInvalidArgs(),
            _ when this == PcaInvalidDuration => onPcaInvalidDuration(),
            _ when this == PcaAccessDenied => onPcaAccessDenied(),
            _ when this == SlrNotFound => onSlrNotFound(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoAvailableContacts,
        Action onAdditionalVerificationRequired,
        Action onDomainNotAllowed,
        Action onInvalidPublicDomain,
        Action onDomainValidationDenied,
        Action onCaaError,
        Action onPcaLimitExceeded,
        Action onPcaInvalidArn,
        Action onPcaInvalidState,
        Action onPcaRequestFailed,
        Action onPcaNameConstraintsValidation,
        Action onPcaResourceNotFound,
        Action onPcaInvalidArgs,
        Action onPcaInvalidDuration,
        Action onPcaAccessDenied,
        Action onSlrNotFound,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == NoAvailableContacts) onNoAvailableContacts();
        else if (this == AdditionalVerificationRequired) onAdditionalVerificationRequired();
        else if (this == DomainNotAllowed) onDomainNotAllowed();
        else if (this == InvalidPublicDomain) onInvalidPublicDomain();
        else if (this == DomainValidationDenied) onDomainValidationDenied();
        else if (this == CaaError) onCaaError();
        else if (this == PcaLimitExceeded) onPcaLimitExceeded();
        else if (this == PcaInvalidArn) onPcaInvalidArn();
        else if (this == PcaInvalidState) onPcaInvalidState();
        else if (this == PcaRequestFailed) onPcaRequestFailed();
        else if (this == PcaNameConstraintsValidation) onPcaNameConstraintsValidation();
        else if (this == PcaResourceNotFound) onPcaResourceNotFound();
        else if (this == PcaInvalidArgs) onPcaInvalidArgs();
        else if (this == PcaInvalidDuration) onPcaInvalidDuration();
        else if (this == PcaAccessDenied) onPcaAccessDenied();
        else if (this == SlrNotFound) onSlrNotFound();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
