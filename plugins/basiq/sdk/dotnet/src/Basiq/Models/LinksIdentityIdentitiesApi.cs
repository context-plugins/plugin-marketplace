using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record LinksIdentityIdentitiesApi
{
    /// <summary>
    /// Self link to the requested identity
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    /// <summary>
    /// Link to the job associated with this identity
    /// </summary>
    [JsonPropertyName("job")]
    public required string Job { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
