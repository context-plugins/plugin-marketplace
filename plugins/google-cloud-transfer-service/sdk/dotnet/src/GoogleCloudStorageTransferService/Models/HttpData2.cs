using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Optional. An HTTP URL data source.
/// </summary>
public record HttpData2
{
    /// <summary>
    /// Required. The URL that points to the file that stores the object list entries. This file must allow public access. The URL is either an HTTP/HTTPS address (e.g. <c>https://example.com/urllist.tsv</c>) or a Cloud Storage path (e.g. <c>gs://my-bucket/urllist.tsv</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listUrl")]
    public string? ListUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
