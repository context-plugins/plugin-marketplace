using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

/// <summary>
/// The stored lists, as GET returns them. Note the deliberate asymmetry with the PUT body: writes take bare ISO codes, reads return one entry per country with the time it was added. Both keys are always present; an empty list is [].
/// </summary>
public record CountryList
{
    [JsonPropertyName("allowed")]
    public required IReadOnlyList<CountryEntry> Allowed { get; init; }

    [JsonPropertyName("blocked")]
    public required IReadOnlyList<CountryEntry> Blocked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
