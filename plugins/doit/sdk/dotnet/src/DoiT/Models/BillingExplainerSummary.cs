using System.Text.Json.Serialization;

namespace DoiT.Models;

public record BillingExplainerSummary
{
    [JsonPropertyName("aws")]
    public required BillingExplainerServiceSummary Aws { get; init; }

    [JsonPropertyName("doit")]
    public required BillingExplainerServiceSummary Doit { get; init; }

    [JsonPropertyName("awsWithoutDoit")]
    public required BillingExplainerServiceSummary AwsWithoutDoit { get; init; }
}
