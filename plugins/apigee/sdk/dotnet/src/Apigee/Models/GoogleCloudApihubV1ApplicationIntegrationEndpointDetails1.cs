using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The details of the Application Integration endpoint to be triggered for curation.
/// </summary>
public record GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1
{
    /// <summary>
    /// Required. The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: <c>https://integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute</c> or <c>https://{location}-integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    public string? Uri { get; init; }

    /// <summary>
    /// Required. The API trigger ID of the Application Integration workflow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("triggerId")]
    public string? TriggerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
