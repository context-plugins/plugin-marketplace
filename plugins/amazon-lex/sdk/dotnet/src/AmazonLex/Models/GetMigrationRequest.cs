using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetMigrationRequest
{
    /// <summary>
    /// The unique identifier of the migration to view. The migrationID is returned by the operation.
    /// </summary>
    [JsonPropertyName("migrationId")]
    public required string MigrationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
