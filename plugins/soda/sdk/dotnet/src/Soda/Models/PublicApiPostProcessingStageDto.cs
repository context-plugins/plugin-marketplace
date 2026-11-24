using System;
using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record PublicApiPostProcessingStageDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ended")]
    public DateTimeOffset? Ended { get; init; }

    [JsonPropertyName("name")]
    public string Name { get; } = "diagnosticWarehouse";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started")]
    public DateTimeOffset? Started { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public PublicApiPostProcessingStageStateDto? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
