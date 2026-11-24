using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record PhoneNumbers
{
    /// <summary>
    /// The phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    public string? Number { get; init; }

    /// <summary>
    /// The type of phone number
    /// </summary>
    [JsonPropertyName("phoneType")]
    public required PhoneType PhoneType { get; init; }

    /// <summary>
    /// Indicates whether the phone number is listed as "Do Not Call" (DNC).
    /// </summary>
    [JsonPropertyName("doNotCall")]
    public required bool DoNotCall { get; init; }

    /// <summary>
    /// The update date of the phone number
    /// </summary>
    [JsonPropertyName("updateDate")]
    public required string UpdateDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
