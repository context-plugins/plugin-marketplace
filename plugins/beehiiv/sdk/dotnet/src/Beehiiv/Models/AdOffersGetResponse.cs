using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdOffersGetResponse
{
    /// <summary>
    /// A list of ad offers available for this publication.
    /// </summary>
    [JsonPropertyName("offers")]
    public required IReadOnlyList<AdOffer> Offers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
