using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record TypedDict
{
    /// <summary>
    /// NPI number of the healthcare provider. An NPI is a unique 10-digit number used to identify health care providers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("npi_number")]
    public string? NpiNumber { get; init; }

    /// <summary>
    /// Professional qualifications or designations earned by a healthcare provider, such as MD, DO, NP, or RN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentials")]
    public string? Credentials { get; init; }

    /// <summary>
    /// A state-issued number that authorizes a healthcare provider to practice in a specific state or field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("license_number")]
    public string? LicenseNumber { get; init; }

    /// <summary>
    /// The specific area of medicine or healthcare in which a provider focuses, such as cardiology, pediatrics, or dermatology.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialization")]
    public string? Specialization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
