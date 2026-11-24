using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// PerfectScale for Commitments onboarding status for each commitment type on the AWS organization (<c>compute</c>, <c>database</c>). A commitment type is omitted when it is not onboarded. When <c>done</c>, inventory and recommendations for that commitment type are available.
/// </summary>
public record AwsOnboardingStatus
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compute")]
    public AwsOnboardingStatusEntry? Compute { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public AwsOnboardingStatusEntry? Database { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
