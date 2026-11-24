using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Models.Enums;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Logging configuration.
/// </summary>
public record LoggingConfig2
{
    /// <summary>
    /// Specifies the actions to be logged. If empty, no logs are generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logActions")]
    public IReadOnlyList<LogAction>? LogActions { get; init; }

    /// <summary>
    /// States in which <c>log_actions</c> are logged. If empty, no logs are generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logActionStates")]
    public IReadOnlyList<LogActionState>? LogActionStates { get; init; }

    /// <summary>
    /// For PosixFilesystem transfers, enables <see href="https://cloud.google.com/storage-transfer/docs/on-prem-transfer-log-format">file system transfer logs</see> instead of, or in addition to, Cloud Logging. This option ignores [LoggableAction] and [LoggableActionState]. If these are set, Cloud Logging will also be enabled for this transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableOnpremGcsTransferLogs")]
    public bool? EnableOnpremGcsTransferLogs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
