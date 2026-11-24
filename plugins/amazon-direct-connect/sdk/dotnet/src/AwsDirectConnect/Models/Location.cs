using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record Location
{
    /// <summary>
    /// The code for the location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationCode")]
    public string? LocationCode { get; init; }

    /// <summary>
    /// The name of the location. This includes the name of the colocation partner and the physical site of the building.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationName")]
    public string? LocationName { get; init; }

    /// <summary>
    /// The Amazon Web Services Region for the location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// The available port speeds for the location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availablePortSpeeds")]
    public IReadOnlyList<string>? AvailablePortSpeeds { get; init; }

    /// <summary>
    /// The name of the service provider for the location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availableProviders")]
    public IReadOnlyList<string>? AvailableProviders { get; init; }

    /// <summary>
    /// The available MAC Security (MACsec) port speeds for the location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availableMacSecPortSpeeds")]
    public IReadOnlyList<string>? AvailableMacSecPortSpeeds { get; init; }

    /// <summary>
    /// The billing modes available at the location, including the port speeds and Amazon Web Services Regions supported by each mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availableBillingModes")]
    public IReadOnlyList<AvailableBillingMode>? AvailableBillingModes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
