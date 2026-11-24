using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CategoricalParameterRange
{
    /// <summary>
    /// The name of the categorical hyperparameter to tune.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    /// <summary>
    /// A list of the tunable categories for the hyperparameter.
    /// </summary>
    [JsonPropertyName("Values")]
    public required IReadOnlyList<string> Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
