using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.AnyOf;

namespace StayingApi.Models;

public record Identity
{
    /// <summary>
    /// The identifier you requested — the {id} path segment (a platform listingId or a URL).
    /// </summary>
    [JsonPropertyName("requestedId")]
    public required RequestedId RequestedId { get; init; }

    /// <summary>
    /// The platform-native canonical id we resolved and returned (equals data.platformListingId). STABLE — use THIS for equality checks and de-duplication, not canonicalUrl.
    /// </summary>
    [JsonPropertyName("resolvedId")]
    public required ResolvedId ResolvedId { get; init; }

    /// <summary>
    /// The exact fetched listing URL. It may include locale/occupancy/tracking query params (e.g. booking <c>…/casa-de-alba.en-gb.html?selected_currency=USD&amp;group_adults=2…</c>), so it is NOT safe for naive string-equality or de-duplication — compare on resolvedId instead. Treat it as a navigable link, not an identity key.
    /// </summary>
    [JsonPropertyName("canonicalUrl")]
    public required CanonicalUrl CanonicalUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
