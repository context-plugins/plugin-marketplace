using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Group type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GroupType>))]
public sealed record GroupType : OpenStringEnum<GroupType>
{
    private GroupType(string value) : base(value)
    {
    }

    public static readonly GroupType Account = new("account");

    public static readonly GroupType Az = new("az");

    public static readonly GroupType AzureSubscription = new("azure_subscription");

    public static readonly GroupType CustomerGateway = new("customer_gateway");

    public static readonly GroupType Ecs = new("ecs");

    public static readonly GroupType Eks = new("eks");

    public static readonly GroupType Aks = new("aks");

    public static readonly GroupType K8SNamespace = new("k8s_namespace");

    public static readonly GroupType K8SPod = new("k8s_pod");

    public static readonly GroupType K8SDeployment = new("k8s_deployment");

    public static readonly GroupType K8SDaemonSet = new("k8s_daemon_set");

    public static readonly GroupType K8SReplicaSet = new("k8s_replica_set");

    public static readonly GroupType K8SStatefulSet = new("k8s_stateful_set");

    public static readonly GroupType Project = new("project");

    public static readonly GroupType Region = new("region");

    public static readonly GroupType SecurityGroup = new("security_group");

    public static readonly GroupType Subnet = new("subnet");

    public static readonly GroupType Vpc = new("vpc");

    public static readonly GroupType GcpInstanceGroup = new("gcp_instance_group");

    public static readonly GroupType GcpManagedZone = new("gcp_managed_zone");

    public static readonly GroupType GkeCluster = new("gke_cluster");

    public static readonly GroupType AzureDnsZone = new("azure_dns_zone");

    public static readonly GroupType AzureCdnProfile = new("azure_cdn_profile");

    public static readonly GroupType AzureResourceGroup = new("azure_resource_group");

    public TResult Match<TResult>(Func<TResult> onAccount,
        Func<TResult> onAz,
        Func<TResult> onAzureSubscription,
        Func<TResult> onCustomerGateway,
        Func<TResult> onEcs,
        Func<TResult> onEks,
        Func<TResult> onAks,
        Func<TResult> onK8SNamespace,
        Func<TResult> onK8SPod,
        Func<TResult> onK8SDeployment,
        Func<TResult> onK8SDaemonSet,
        Func<TResult> onK8SReplicaSet,
        Func<TResult> onK8SStatefulSet,
        Func<TResult> onProject,
        Func<TResult> onRegion,
        Func<TResult> onSecurityGroup,
        Func<TResult> onSubnet,
        Func<TResult> onVpc,
        Func<TResult> onGcpInstanceGroup,
        Func<TResult> onGcpManagedZone,
        Func<TResult> onGkeCluster,
        Func<TResult> onAzureDnsZone,
        Func<TResult> onAzureCdnProfile,
        Func<TResult> onAzureResourceGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Account => onAccount(),
            _ when this == Az => onAz(),
            _ when this == AzureSubscription => onAzureSubscription(),
            _ when this == CustomerGateway => onCustomerGateway(),
            _ when this == Ecs => onEcs(),
            _ when this == Eks => onEks(),
            _ when this == Aks => onAks(),
            _ when this == K8SNamespace => onK8SNamespace(),
            _ when this == K8SPod => onK8SPod(),
            _ when this == K8SDeployment => onK8SDeployment(),
            _ when this == K8SDaemonSet => onK8SDaemonSet(),
            _ when this == K8SReplicaSet => onK8SReplicaSet(),
            _ when this == K8SStatefulSet => onK8SStatefulSet(),
            _ when this == Project => onProject(),
            _ when this == Region => onRegion(),
            _ when this == SecurityGroup => onSecurityGroup(),
            _ when this == Subnet => onSubnet(),
            _ when this == Vpc => onVpc(),
            _ when this == GcpInstanceGroup => onGcpInstanceGroup(),
            _ when this == GcpManagedZone => onGcpManagedZone(),
            _ when this == GkeCluster => onGkeCluster(),
            _ when this == AzureDnsZone => onAzureDnsZone(),
            _ when this == AzureCdnProfile => onAzureCdnProfile(),
            _ when this == AzureResourceGroup => onAzureResourceGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccount,
        Action onAz,
        Action onAzureSubscription,
        Action onCustomerGateway,
        Action onEcs,
        Action onEks,
        Action onAks,
        Action onK8SNamespace,
        Action onK8SPod,
        Action onK8SDeployment,
        Action onK8SDaemonSet,
        Action onK8SReplicaSet,
        Action onK8SStatefulSet,
        Action onProject,
        Action onRegion,
        Action onSecurityGroup,
        Action onSubnet,
        Action onVpc,
        Action onGcpInstanceGroup,
        Action onGcpManagedZone,
        Action onGkeCluster,
        Action onAzureDnsZone,
        Action onAzureCdnProfile,
        Action onAzureResourceGroup,
        Action<string> otherwise)
    {
        if (this == Account) onAccount();
        else if (this == Az) onAz();
        else if (this == AzureSubscription) onAzureSubscription();
        else if (this == CustomerGateway) onCustomerGateway();
        else if (this == Ecs) onEcs();
        else if (this == Eks) onEks();
        else if (this == Aks) onAks();
        else if (this == K8SNamespace) onK8SNamespace();
        else if (this == K8SPod) onK8SPod();
        else if (this == K8SDeployment) onK8SDeployment();
        else if (this == K8SDaemonSet) onK8SDaemonSet();
        else if (this == K8SReplicaSet) onK8SReplicaSet();
        else if (this == K8SStatefulSet) onK8SStatefulSet();
        else if (this == Project) onProject();
        else if (this == Region) onRegion();
        else if (this == SecurityGroup) onSecurityGroup();
        else if (this == Subnet) onSubnet();
        else if (this == Vpc) onVpc();
        else if (this == GcpInstanceGroup) onGcpInstanceGroup();
        else if (this == GcpManagedZone) onGcpManagedZone();
        else if (this == GkeCluster) onGkeCluster();
        else if (this == AzureDnsZone) onAzureDnsZone();
        else if (this == AzureCdnProfile) onAzureCdnProfile();
        else if (this == AzureResourceGroup) onAzureResourceGroup();
        else otherwise(Value);
    }
}
