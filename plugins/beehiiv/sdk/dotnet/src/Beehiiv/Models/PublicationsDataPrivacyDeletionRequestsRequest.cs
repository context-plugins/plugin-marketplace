using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsDataPrivacyDeletionRequestsRequest
{
    /// <summary>
    /// The email address of the subscriber to delete.
    /// </summary>
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
