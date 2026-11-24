using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdOfferAdvertisementsGetResponse
{
    /// <summary>
    /// A list of active advertisement creatives available for this offer.
    /// </summary>
    [JsonPropertyName("advertisements")]
    public required IReadOnlyList<AdOfferAdvertisement> Advertisements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
