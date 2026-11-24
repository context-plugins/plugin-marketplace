using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelContentOverridesItems
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("scope")]
    public required ValueModelContentOverridesItemsScope Scope { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalOverrides")]
    public IReadOnlyDictionary<string, ValueModelContentOverridesItemsSignalOverrides>? SignalOverrides { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalSignals")]
    public IReadOnlyList<ValueModelContentOverridesItemsAdditionalSignalsItems>? AdditionalSignals { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monetaryConversionOverrides")]
    public IReadOnlyDictionary<string, ValueModelContentOverridesItemsMonetaryConversionOverrides>? MonetaryConversionOverrides { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
