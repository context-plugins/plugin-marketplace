using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The endpoint to be triggered for curation.
/// </summary>
public record GoogleCloudApihubV1Endpoint1
{
    /// <summary>
    /// Required. The details of the Application Integration endpoint to be triggered for curation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationIntegrationEndpointDetails")]
    public GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1? ApplicationIntegrationEndpointDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
