using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// This resource represents a long-running operation that is the result of a network API call.
/// </summary>
public record Operation
{
    /// <summary>
    /// Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// The normal, successful response of the operation. If the original method returns no data on success, such as <c>Delete</c>, the response is <c>google.protobuf.Empty</c>. If the original method is standard <c>Get</c>/<c>Create</c>/<c>Update</c>, the response should be the resource. For other methods, the response should have the type <c>XxxResponse</c>, where <c>Xxx</c> is the original method name. For example, if the original method name is <c>TakeSnapshot()</c>, the inferred response type is <c>TakeSnapshotResponse</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response")]
    public IReadOnlyDictionary<string, object>? Response { get; init; }

    /// <summary>
    /// The server-assigned unique name. The format of <c>name</c> is <c>transferOperations/some/unique/name</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The error result of the operation in case of failure or cancellation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Status1? Error { get; init; }

    /// <summary>
    /// If the value is <c>false</c>, it means the operation is still in progress. If <c>true</c>, the operation is completed, and either <c>error</c> or <c>response</c> is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("done")]
    public bool? Done { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
