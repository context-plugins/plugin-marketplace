using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record SharingV1Request
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissions")]
    public IReadOnlyList<ResourcePermission>? Permissions { get; init; }

    /// <summary>
    /// The type of permissions granted to all users in the organization for this resource.
    /// <para>
    /// Allocations (single and group) always have at least <c>viewer</c> public access, so it cannot be cleared:
    /// - If <c>public</c> is omitted, the stored value is kept.
    /// - An empty string (<c>""</c>) is accepted for backward compatibility and is treated as <c>viewer</c>.
    /// - An explicit <c>null</c> is rejected with <c>400 Bad Request</c>.
    /// </para>
    /// <para>
    /// For Reports, Budgets, and Alerts, an omitted or <c>null</c> value sets <c>public</c> to <c>null</c> (no public access).
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public Public1DoiTSharingApi? Public { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
