using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record SyncConfig
{
    /// <summary>
    /// The Conflict Resolution strategy to perform in the event of a conflict. OPTIMISTIC_CONCURRENCY: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server. AUTOMERGE: Resolve conflicts with the Automerge conflict resolution strategy. LAMBDA: Resolve conflicts with an Lambda function supplied in the LambdaConflictHandlerConfig.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conflictHandler")]
    public ConflictHandler? ConflictHandler { get; init; }

    /// <summary>
    /// The Conflict Detection strategy to use. VERSION: Detect conflicts based on object versions for this resolver. NONE: Do not detect conflicts when invoking this resolver.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conflictDetection")]
    public ConflictDetection? ConflictDetection { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaConflictHandlerConfig")]
    public LambdaConflictHandlerConfig? LambdaConflictHandlerConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
