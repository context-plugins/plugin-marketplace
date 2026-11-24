using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// Indicates the automatic update policy for a gateway. ALL_VERSIONS - Enables regular gateway maintenance updates. EMERGENCY_VERSIONS_ONLY - Disables regular gateway maintenance updates. The gateway will still receive emergency version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be notified before an emergency version update is applied. These updates are applied during your gateway's scheduled maintenance window.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AutomaticUpdatePolicy>))]
public sealed record AutomaticUpdatePolicy : OpenStringEnum<AutomaticUpdatePolicy>
{
    private AutomaticUpdatePolicy(string value) : base(value)
    {
    }

    public static readonly AutomaticUpdatePolicy AllVersions = new("ALL_VERSIONS");

    public static readonly AutomaticUpdatePolicy EmergencyVersionsOnly = new("EMERGENCY_VERSIONS_ONLY");

    public TResult Match<TResult>(Func<TResult> onAllVersions,
        Func<TResult> onEmergencyVersionsOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllVersions => onAllVersions(),
            _ when this == EmergencyVersionsOnly => onEmergencyVersionsOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllVersions, Action onEmergencyVersionsOnly, Action<string> otherwise)
    {
        if (this == AllVersions) onAllVersions();
        else if (this == EmergencyVersionsOnly) onEmergencyVersionsOnly();
        else otherwise(Value);
    }
}
