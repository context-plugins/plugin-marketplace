using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

/// <summary>
/// The format of the NPI data that is serialized to the UI on the search page.
/// </summary>
public record NpiData4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("npi_number")]
    public string? NpiNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentials")]
    public string? Credentials { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("license_number")]
    public string? LicenseNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialization")]
    public string? Specialization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
