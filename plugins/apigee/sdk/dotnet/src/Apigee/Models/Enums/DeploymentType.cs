using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be <b>prevented from performing</b> a <see href="/apigee/docs/api-platform/local-development/overview#prevented-actions">subset of actions</see> within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DeploymentType>))]
public sealed record DeploymentType : OpenStringEnum<DeploymentType>
{
    private DeploymentType(string value) : base(value)
    {
    }

    public static readonly DeploymentType DeploymentTypeUnspecified = new("DEPLOYMENT_TYPE_UNSPECIFIED");

    public static readonly DeploymentType Proxy = new("PROXY");

    public static readonly DeploymentType Archive = new("ARCHIVE");

    public TResult Match<TResult>(Func<TResult> onDeploymentTypeUnspecified,
        Func<TResult> onProxy,
        Func<TResult> onArchive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeploymentTypeUnspecified => onDeploymentTypeUnspecified(),
            _ when this == Proxy => onProxy(),
            _ when this == Archive => onArchive(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeploymentTypeUnspecified, Action onProxy, Action onArchive, Action<string> otherwise)
    {
        if (this == DeploymentTypeUnspecified) onDeploymentTypeUnspecified();
        else if (this == Proxy) onProxy();
        else if (this == Archive) onArchive();
        else otherwise(Value);
    }
}
