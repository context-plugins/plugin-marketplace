using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListFileSystemAssociationsOutput
{
    /// <summary>
    /// If the request includes Marker, the response returns that value in this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    /// <summary>
    /// If a value is present, there are more file system associations to return. In a subsequent request, use NextMarker as the value for Marker to retrieve the next set of file system associations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextMarker")]
    public string? NextMarker { get; init; }

    /// <summary>
    /// An array of information about the Amazon FSx gateway's file system associations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationSummaryList")]
    public IReadOnlyList<FileSystemAssociationSummary>? FileSystemAssociationSummaryList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
