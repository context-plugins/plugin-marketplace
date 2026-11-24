using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
/// </summary>
public record GoogleCloudApigeeV1EndpointAttachment
{
    /// <summary>
    /// Format: projects/*/regions/*/serviceAttachments/*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAttachment")]
    public string? ServiceAttachment { get; init; }

    /// <summary>
    /// Required. Location of the endpoint attachment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// Output only. State of the endpoint attachment connection to the service attachment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionState")]
    public ConnectionState? ConnectionState { get; init; }

    /// <summary>
    /// Output only. State of the endpoint attachment. Values other than <c>ACTIVE</c> mean the resource is not ready to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State8? State { get; init; }

    /// <summary>
    /// Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    /// <summary>
    /// Name of the endpoint attachment. Use the following structure in your request: <c>organizations/{org}/endpointAttachments/{endpoint_attachment}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
