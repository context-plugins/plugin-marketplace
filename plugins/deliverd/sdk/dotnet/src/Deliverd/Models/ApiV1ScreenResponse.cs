using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ScreenResponse
{
    [JsonPropertyName("verdict")]
    public required VerdictDeliverdDevScreenApi Verdict { get; init; }

    [JsonPropertyName("allowed")]
    public required bool Allowed { get; init; }

    [JsonPropertyName("classification")]
    public required ClassificationDeliverdDevReportsApi Classification { get; init; }

    [JsonPropertyName("personalData")]
    public required bool PersonalData { get; init; }

    [JsonPropertyName("categories")]
    public required IReadOnlyList<string> Categories { get; init; }

    [JsonPropertyName("counts")]
    public required IReadOnlyDictionary<string, double> Counts { get; init; }

    [JsonPropertyName("offending")]
    public required IReadOnlyList<string> Offending { get; init; }

    [JsonPropertyName("reasons")]
    public required IReadOnlyList<string> Reasons { get; init; }

    [JsonPropertyName("target")]
    public required Target? Target { get; init; }

    [JsonPropertyName("findings")]
    public required IReadOnlyList<Finding>? Findings { get; init; }

    [JsonPropertyName("redactedText")]
    public required string? RedactedText { get; init; }

    [JsonPropertyName("approval")]
    public required ApprovalDeliverdDevScreenApi? Approval { get; init; }

    [JsonPropertyName("mode")]
    public required ModeDeliverdDevScreenApi Mode { get; init; }

    [JsonPropertyName("wouldBe")]
    public required WouldBe? WouldBe { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
