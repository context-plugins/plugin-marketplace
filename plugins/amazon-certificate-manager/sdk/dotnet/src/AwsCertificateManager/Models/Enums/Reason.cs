using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The reason for the failure.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason AccessDenied = new("ACCESS_DENIED");

    public static readonly Reason DomainMismatch = new("DOMAIN_MISMATCH");

    public static readonly Reason DomainNotAllowed = new("DOMAIN_NOT_ALLOWED");

    public static readonly Reason EndpointNotActive = new("ENDPOINT_NOT_ACTIVE");

    public static readonly Reason HostedZoneNotFound = new("HOSTED_ZONE_NOT_FOUND");

    public static readonly Reason InternalFailure = new("INTERNAL_FAILURE");

    public static readonly Reason InvalidChangeBatch = new("INVALID_CHANGE_BATCH");

    public static readonly Reason InvalidPublicDomain = new("INVALID_PUBLIC_DOMAIN");

    public static readonly Reason TimedOut = new("TIMED_OUT");

    public TResult Match<TResult>(Func<TResult> onAccessDenied,
        Func<TResult> onDomainMismatch,
        Func<TResult> onDomainNotAllowed,
        Func<TResult> onEndpointNotActive,
        Func<TResult> onHostedZoneNotFound,
        Func<TResult> onInternalFailure,
        Func<TResult> onInvalidChangeBatch,
        Func<TResult> onInvalidPublicDomain,
        Func<TResult> onTimedOut,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AccessDenied => onAccessDenied(),
            _ when this == DomainMismatch => onDomainMismatch(),
            _ when this == DomainNotAllowed => onDomainNotAllowed(),
            _ when this == EndpointNotActive => onEndpointNotActive(),
            _ when this == HostedZoneNotFound => onHostedZoneNotFound(),
            _ when this == InternalFailure => onInternalFailure(),
            _ when this == InvalidChangeBatch => onInvalidChangeBatch(),
            _ when this == InvalidPublicDomain => onInvalidPublicDomain(),
            _ when this == TimedOut => onTimedOut(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccessDenied,
        Action onDomainMismatch,
        Action onDomainNotAllowed,
        Action onEndpointNotActive,
        Action onHostedZoneNotFound,
        Action onInternalFailure,
        Action onInvalidChangeBatch,
        Action onInvalidPublicDomain,
        Action onTimedOut,
        Action<string> otherwise)
    {
        if (this == AccessDenied) onAccessDenied();
        else if (this == DomainMismatch) onDomainMismatch();
        else if (this == DomainNotAllowed) onDomainNotAllowed();
        else if (this == EndpointNotActive) onEndpointNotActive();
        else if (this == HostedZoneNotFound) onHostedZoneNotFound();
        else if (this == InternalFailure) onInternalFailure();
        else if (this == InvalidChangeBatch) onInvalidChangeBatch();
        else if (this == InvalidPublicDomain) onInvalidPublicDomain();
        else if (this == TimedOut) onTimedOut();
        else otherwise(Value);
    }
}
