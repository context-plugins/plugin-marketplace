using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Details specific to digital wallet payees.
/// </summary>
public record DigitalWalletPayeeDetails
{
    /// <summary>
    /// The name associated with the digital wallet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The identifier for the digital wallet (email, phone, etc.).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identifier")]
    public string? Identifier { get; init; }

    /// <summary>
    /// The type of identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypePlatformPayeesApi? Type { get; init; }

    /// <summary>
    /// The digital wallet provider.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public Provider? Provider { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
