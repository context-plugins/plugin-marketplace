using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record SmbLocalGroups
{
    /// <summary>
    /// A list of Active Directory users and groups that have local Gateway Admin permissions. Acceptable formats include: DOMAIN\User1, user1, DOMAIN\group1, and group1. Gateway Admins can use the Shared Folders Microsoft Management Console snap-in to force-close files that are open and locked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayAdmins")]
    public IReadOnlyList<string>? GatewayAdmins { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
