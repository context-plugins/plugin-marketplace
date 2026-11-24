using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment supports flowhooks and flow hook is configured.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProxyDeploymentType>))]
public sealed record ProxyDeploymentType : OpenStringEnum<ProxyDeploymentType>
{
    private ProxyDeploymentType(string value) : base(value)
    {
    }

    public static readonly ProxyDeploymentType ProxyDeploymentTypeUnspecified = new(
        "PROXY_DEPLOYMENT_TYPE_UNSPECIFIED");

    public static readonly ProxyDeploymentType Standard = new("STANDARD");

    public static readonly ProxyDeploymentType Extensible = new("EXTENSIBLE");

    public TResult Match<TResult>(Func<TResult> onProxyDeploymentTypeUnspecified,
        Func<TResult> onStandard,
        Func<TResult> onExtensible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ProxyDeploymentTypeUnspecified => onProxyDeploymentTypeUnspecified(),
            _ when this == Standard => onStandard(),
            _ when this == Extensible => onExtensible(),
            _ => otherwise(Value)
        };

    public void Match(Action onProxyDeploymentTypeUnspecified,
        Action onStandard,
        Action onExtensible,
        Action<string> otherwise)
    {
        if (this == ProxyDeploymentTypeUnspecified) onProxyDeploymentTypeUnspecified();
        else if (this == Standard) onStandard();
        else if (this == Extensible) onExtensible();
        else otherwise(Value);
    }
}
