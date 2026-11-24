using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record Publication
{
    /// <summary>
    /// A unique prefixed id of the publication
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the publication
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The name of the organization
    /// </summary>
    [JsonPropertyName("organization_name")]
    public required string OrganizationName { get; init; }

    /// <summary>
    /// A boolean field indicating whether the referral program is active for this publication.
    /// </summary>
    [JsonPropertyName("referral_program_enabled")]
    public required bool ReferralProgramEnabled { get; init; }

    /// <summary>
    /// The time that the publication was created. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonPropertyName("created")]
    public required double Created { get; init; }

    /// <summary>
    /// Optional list of stats for a publication. Retrievable by including an <c>expand</c> array in the publication request body. Add <c>"stats"</c> to the array to retrieve all, or add individual stats (prefaced with <c>stat_</c>) to only retrieve specific ones.
    /// <para>
    /// Examples:
    /// {
    ///   "expand": ["stats"]
    /// }
    /// </para>
    /// <para>
    /// {
    ///   "expand": ["stat_active_subscriptions", "stat_average_click_rate"]
    /// }
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public PublicationStats? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
