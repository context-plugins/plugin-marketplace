using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The type of the gateway.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GatewayTypeApigeeProjectsApi>))]
public sealed record GatewayTypeApigeeProjectsApi : OpenStringEnum<GatewayTypeApigeeProjectsApi>
{
    private GatewayTypeApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly GatewayTypeApigeeProjectsApi GatewayTypeUnspecified = new("GATEWAY_TYPE_UNSPECIFIED");

    public static readonly GatewayTypeApigeeProjectsApi ApigeeXAndHybrid = new("APIGEE_X_AND_HYBRID");

    public static readonly GatewayTypeApigeeProjectsApi ApigeeEdgePublicCloud = new("APIGEE_EDGE_PUBLIC_CLOUD");

    public static readonly GatewayTypeApigeeProjectsApi ApigeeEdgePrivateCloud = new("APIGEE_EDGE_PRIVATE_CLOUD");

    public static readonly GatewayTypeApigeeProjectsApi CloudApiGateway = new("CLOUD_API_GATEWAY");

    public static readonly GatewayTypeApigeeProjectsApi CloudEndpoints = new("CLOUD_ENDPOINTS");

    public static readonly GatewayTypeApigeeProjectsApi ApiDiscovery = new("API_DISCOVERY");

    public static readonly GatewayTypeApigeeProjectsApi Others = new("OTHERS");

    public static readonly GatewayTypeApigeeProjectsApi AwsApiGateway = new("AWS_API_GATEWAY");

    public static readonly GatewayTypeApigeeProjectsApi AzureApiManagement = new("AZURE_API_MANAGEMENT");

    public TResult Match<TResult>(Func<TResult> onGatewayTypeUnspecified,
        Func<TResult> onApigeeXAndHybrid,
        Func<TResult> onApigeeEdgePublicCloud,
        Func<TResult> onApigeeEdgePrivateCloud,
        Func<TResult> onCloudApiGateway,
        Func<TResult> onCloudEndpoints,
        Func<TResult> onApiDiscovery,
        Func<TResult> onOthers,
        Func<TResult> onAwsApiGateway,
        Func<TResult> onAzureApiManagement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GatewayTypeUnspecified => onGatewayTypeUnspecified(),
            _ when this == ApigeeXAndHybrid => onApigeeXAndHybrid(),
            _ when this == ApigeeEdgePublicCloud => onApigeeEdgePublicCloud(),
            _ when this == ApigeeEdgePrivateCloud => onApigeeEdgePrivateCloud(),
            _ when this == CloudApiGateway => onCloudApiGateway(),
            _ when this == CloudEndpoints => onCloudEndpoints(),
            _ when this == ApiDiscovery => onApiDiscovery(),
            _ when this == Others => onOthers(),
            _ when this == AwsApiGateway => onAwsApiGateway(),
            _ when this == AzureApiManagement => onAzureApiManagement(),
            _ => otherwise(Value)
        };

    public void Match(Action onGatewayTypeUnspecified,
        Action onApigeeXAndHybrid,
        Action onApigeeEdgePublicCloud,
        Action onApigeeEdgePrivateCloud,
        Action onCloudApiGateway,
        Action onCloudEndpoints,
        Action onApiDiscovery,
        Action onOthers,
        Action onAwsApiGateway,
        Action onAzureApiManagement,
        Action<string> otherwise)
    {
        if (this == GatewayTypeUnspecified) onGatewayTypeUnspecified();
        else if (this == ApigeeXAndHybrid) onApigeeXAndHybrid();
        else if (this == ApigeeEdgePublicCloud) onApigeeEdgePublicCloud();
        else if (this == ApigeeEdgePrivateCloud) onApigeeEdgePrivateCloud();
        else if (this == CloudApiGateway) onCloudApiGateway();
        else if (this == CloudEndpoints) onCloudEndpoints();
        else if (this == ApiDiscovery) onApiDiscovery();
        else if (this == Others) onOthers();
        else if (this == AwsApiGateway) onAwsApiGateway();
        else if (this == AzureApiManagement) onAzureApiManagement();
        else otherwise(Value);
    }
}
