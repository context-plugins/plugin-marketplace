using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Link connection type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConnectionType>))]
public sealed record ConnectionType : OpenStringEnum<ConnectionType>
{
    private ConnectionType(string value) : base(value)
    {
    }

    public static readonly ConnectionType Normal = new("normal");

    public static readonly ConnectionType Tunnel = new("tunnel");

    public static readonly ConnectionType Private = new("private");

    public static readonly ConnectionType Vpn = new("VPN");

    public static readonly ConnectionType VpcPeering = new("VPC Peering");

    public static readonly ConnectionType NetworkConnectivityCenter = new("Network Connectivity Center");

    public static readonly ConnectionType PrivateServiceConnect = new("Private Service Connect");

    public static readonly ConnectionType PrivateGoogleAccess = new("Private Google Access");

    public static readonly ConnectionType ServerlessVpc = new("Serverless VPC");

    public static readonly ConnectionType ServerlessVpcAccessConnector = new("Serverless VPC Access Connector");

    public static readonly ConnectionType CrossCloudInterconnect = new("Cross Cloud Interconnect");

    public static readonly ConnectionType PartnerInterconnect = new("Partner Interconnect");

    public static readonly ConnectionType DedicatedInterconnect = new("Dedicated Interconnect");

    public TResult Match<TResult>(Func<TResult> onNormal,
        Func<TResult> onTunnel,
        Func<TResult> onPrivate,
        Func<TResult> onVpn,
        Func<TResult> onVpcPeering,
        Func<TResult> onNetworkConnectivityCenter,
        Func<TResult> onPrivateServiceConnect,
        Func<TResult> onPrivateGoogleAccess,
        Func<TResult> onServerlessVpc,
        Func<TResult> onServerlessVpcAccessConnector,
        Func<TResult> onCrossCloudInterconnect,
        Func<TResult> onPartnerInterconnect,
        Func<TResult> onDedicatedInterconnect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Normal => onNormal(),
            _ when this == Tunnel => onTunnel(),
            _ when this == Private => onPrivate(),
            _ when this == Vpn => onVpn(),
            _ when this == VpcPeering => onVpcPeering(),
            _ when this == NetworkConnectivityCenter => onNetworkConnectivityCenter(),
            _ when this == PrivateServiceConnect => onPrivateServiceConnect(),
            _ when this == PrivateGoogleAccess => onPrivateGoogleAccess(),
            _ when this == ServerlessVpc => onServerlessVpc(),
            _ when this == ServerlessVpcAccessConnector => onServerlessVpcAccessConnector(),
            _ when this == CrossCloudInterconnect => onCrossCloudInterconnect(),
            _ when this == PartnerInterconnect => onPartnerInterconnect(),
            _ when this == DedicatedInterconnect => onDedicatedInterconnect(),
            _ => otherwise(Value)
        };

    public void Match(Action onNormal,
        Action onTunnel,
        Action onPrivate,
        Action onVpn,
        Action onVpcPeering,
        Action onNetworkConnectivityCenter,
        Action onPrivateServiceConnect,
        Action onPrivateGoogleAccess,
        Action onServerlessVpc,
        Action onServerlessVpcAccessConnector,
        Action onCrossCloudInterconnect,
        Action onPartnerInterconnect,
        Action onDedicatedInterconnect,
        Action<string> otherwise)
    {
        if (this == Normal) onNormal();
        else if (this == Tunnel) onTunnel();
        else if (this == Private) onPrivate();
        else if (this == Vpn) onVpn();
        else if (this == VpcPeering) onVpcPeering();
        else if (this == NetworkConnectivityCenter) onNetworkConnectivityCenter();
        else if (this == PrivateServiceConnect) onPrivateServiceConnect();
        else if (this == PrivateGoogleAccess) onPrivateGoogleAccess();
        else if (this == ServerlessVpc) onServerlessVpc();
        else if (this == ServerlessVpcAccessConnector) onServerlessVpcAccessConnector();
        else if (this == CrossCloudInterconnect) onCrossCloudInterconnect();
        else if (this == PartnerInterconnect) onPartnerInterconnect();
        else if (this == DedicatedInterconnect) onDedicatedInterconnect();
        else otherwise(Value);
    }
}
