using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;
using GoogleCloudApiGateway.Models.Enums;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
/// </summary>
public record ApigatewayAuditLogConfig
{
    /// <summary>
    /// Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exemptedMembers")]
    public IReadOnlyList<string>? ExemptedMembers { get; init; }

    /// <summary>
    /// The log type that this config enables.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logType")]
    public LogType? LogType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
