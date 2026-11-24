using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Models.Enums;

namespace Surfe.Models;

public record EnrichmentOptions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceptedEmailType")]
    public AcceptedEmailType? AcceptedEmailType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skipMobileEnrichmentIfNoEmailFound")]
    public bool? SkipMobileEnrichmentIfNoEmailFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
