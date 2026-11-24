using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Registration fundraising configuration. JSON object (e.g. <c>goal</c>, <c>minimum</c>, <c>description</c>).
/// </summary>
public record EnableRegistrationFundraising
{
    [JsonPropertyName("name")]
    public string Name { get; } = "enable_registration_fundraising";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public object? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
