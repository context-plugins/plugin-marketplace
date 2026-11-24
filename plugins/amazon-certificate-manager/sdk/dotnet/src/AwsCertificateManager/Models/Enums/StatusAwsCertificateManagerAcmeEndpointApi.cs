using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The status of the ACME endpoint.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsCertificateManagerAcmeEndpointApi>))]
public sealed record StatusAwsCertificateManagerAcmeEndpointApi : OpenStringEnum<StatusAwsCertificateManagerAcmeEndpointApi>
{
    private StatusAwsCertificateManagerAcmeEndpointApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsCertificateManagerAcmeEndpointApi Creating = new("CREATING");

    public static readonly StatusAwsCertificateManagerAcmeEndpointApi Active = new("ACTIVE");

    public static readonly StatusAwsCertificateManagerAcmeEndpointApi Deleting = new("DELETING");

    public static readonly StatusAwsCertificateManagerAcmeEndpointApi Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating, Action onActive, Action onDeleting, Action onFailed, Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
