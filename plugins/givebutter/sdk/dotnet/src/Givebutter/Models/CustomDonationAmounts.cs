using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Custom donation amounts. JSON object; the dashboard groups amounts by frequency (<c>once</c>, <c>monthly</c>, <c>quarterly</c>, <c>yearly</c>).
/// </summary>
public record CustomDonationAmounts
{
    [JsonPropertyName("name")]
    public string Name { get; } = "custom_donation_amounts";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public object? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
