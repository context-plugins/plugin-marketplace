using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The endpoint to be triggered for curation. The endpoint will be invoked with a request payload containing ApiMetadata. Response should contain curated data in the form of ApiMetadata.
/// </summary>
public record GoogleCloudApihubV1Endpoint
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
