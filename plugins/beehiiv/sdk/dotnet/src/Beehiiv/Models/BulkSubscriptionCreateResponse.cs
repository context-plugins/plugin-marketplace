using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The response containing the import ID
/// </summary>
public record BulkSubscriptionCreateResponse
{
    /// <summary>
    /// The result of the create request
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// The database ID of the import object created from the Bulk Subscription Create request
    /// </summary>
    [JsonPropertyName("import_id")]
    public required string ImportId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
