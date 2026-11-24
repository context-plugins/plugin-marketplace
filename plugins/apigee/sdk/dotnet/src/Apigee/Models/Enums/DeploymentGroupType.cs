using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Type of the deployment group, which will be either Standard or Extensible.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DeploymentGroupType>))]
public sealed record DeploymentGroupType : OpenStringEnum<DeploymentGroupType>
{
    private DeploymentGroupType(string value) : base(value)
    {
    }

    public static readonly DeploymentGroupType DeploymentGroupTypeUnspecified = new(
        "DEPLOYMENT_GROUP_TYPE_UNSPECIFIED");

    public static readonly DeploymentGroupType Standard = new("STANDARD");

    public static readonly DeploymentGroupType Extensible = new("EXTENSIBLE");

    public TResult Match<TResult>(Func<TResult> onDeploymentGroupTypeUnspecified,
        Func<TResult> onStandard,
        Func<TResult> onExtensible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeploymentGroupTypeUnspecified => onDeploymentGroupTypeUnspecified(),
            _ when this == Standard => onStandard(),
            _ when this == Extensible => onExtensible(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeploymentGroupTypeUnspecified,
        Action onStandard,
        Action onExtensible,
        Action<string> otherwise)
    {
        if (this == DeploymentGroupTypeUnspecified) onDeploymentGroupTypeUnspecified();
        else if (this == Standard) onStandard();
        else if (this == Extensible) onExtensible();
        else otherwise(Value);
    }
}
