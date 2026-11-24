using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Type of data to be managed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataType4>))]
public sealed record DataType4 : OpenStringEnum<DataType4>
{
    private DataType4(string value) : base(value)
    {
    }

    public static readonly DataType4 DataTypeUnspecified = new("DATA_TYPE_UNSPECIFIED");

    public static readonly DataType4 ProxyDeploymentManifest = new("PROXY_DEPLOYMENT_MANIFEST");

    public static readonly DataType4 EnvironmentManifest = new("ENVIRONMENT_MANIFEST");

    public static readonly DataType4 ProxyBundle = new("PROXY_BUNDLE");

    public static readonly DataType4 SharedFlowBundle = new("SHARED_FLOW_BUNDLE");

    public TResult Match<TResult>(Func<TResult> onDataTypeUnspecified,
        Func<TResult> onProxyDeploymentManifest,
        Func<TResult> onEnvironmentManifest,
        Func<TResult> onProxyBundle,
        Func<TResult> onSharedFlowBundle,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataTypeUnspecified => onDataTypeUnspecified(),
            _ when this == ProxyDeploymentManifest => onProxyDeploymentManifest(),
            _ when this == EnvironmentManifest => onEnvironmentManifest(),
            _ when this == ProxyBundle => onProxyBundle(),
            _ when this == SharedFlowBundle => onSharedFlowBundle(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataTypeUnspecified,
        Action onProxyDeploymentManifest,
        Action onEnvironmentManifest,
        Action onProxyBundle,
        Action onSharedFlowBundle,
        Action<string> otherwise)
    {
        if (this == DataTypeUnspecified) onDataTypeUnspecified();
        else if (this == ProxyDeploymentManifest) onProxyDeploymentManifest();
        else if (this == EnvironmentManifest) onEnvironmentManifest();
        else if (this == ProxyBundle) onProxyBundle();
        else if (this == SharedFlowBundle) onSharedFlowBundle();
        else otherwise(Value);
    }
}
