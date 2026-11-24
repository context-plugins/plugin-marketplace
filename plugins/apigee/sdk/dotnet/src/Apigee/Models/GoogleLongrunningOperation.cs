using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// This resource represents a long-running operation that is the result of a network API call.
/// </summary>
public record GoogleLongrunningOperation
{
    /// <summary>
    /// Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the <c>name</c> should be a resource name ending with <c>operations/{unique_id}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// If the value is <c>false</c>, it means the operation is still in progress. If <c>true</c>, the operation is completed, and either <c>error</c> or <c>response</c> is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("done")]
    public bool? Done { get; init; }

    /// <summary>
    /// The error result of the operation in case of failure or cancellation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public GoogleRpcStatus3? Error { get; init; }

    /// <summary>
    /// The normal, successful response of the operation. If the original method returns no data on success, such as <c>Delete</c>, the response is <c>google.protobuf.Empty</c>. If the original method is standard <c>Get</c>/<c>Create</c>/<c>Update</c>, the response should be the resource. For other methods, the response should have the type <c>XxxResponse</c>, where <c>Xxx</c> is the original method name. For example, if the original method name is <c>TakeSnapshot()</c>, the inferred response type is <c>TakeSnapshotResponse</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response")]
    public IReadOnlyDictionary<string, object>? Response { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
