using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Binds the resources in a proxy or remote service with the gRPC operation and its associated quota enforcement.
/// </summary>
public record GoogleCloudApigeeV1GrpcOperationConfig
{
    /// <summary>
    /// List of unqualified gRPC method names for the proxy to which quota will be applied. If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy. Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"].
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("methods")]
    public IReadOnlyList<string>? Methods { get; init; }

    /// <summary>
    /// Quota parameters to be enforced for the methods and API source combination. If none are specified, quota enforcement will not be done.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota")]
    public GoogleCloudApigeeV1Quota3? Quota { get; init; }

    /// <summary>
    /// Custom attributes associated with the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Required. Name of the API proxy with which the gRPC operation and quota are associated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSource")]
    public string? ApiSource { get; init; }

    /// <summary>
    /// Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service")]
    public string? Service { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
