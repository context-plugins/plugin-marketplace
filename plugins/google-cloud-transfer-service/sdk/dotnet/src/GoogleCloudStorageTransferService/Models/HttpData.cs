using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be <c>"TsvHttpData-1.0"</c>, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * <b>HTTP URL</b> — The location of the object. * <b>Length</b> — The size of the object in bytes. * <b>MD5</b> — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see <see href="https://cloud.google.com/storage-transfer/docs/create-url-list">Transferring data from URLs</see>. When transferring data based on a URL list, keep the following in mind: * When an object located at <c>http(s)://hostname:port/</c> is transferred to a data sink, the name of the object at the data sink is <c>/</c>. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys <c>robots.txt</c> rules and requires the source HTTP server to support <c>Range</c> requests and to return a <c>Content-Length</c> header in each response. * ObjectConditions have no effect when filtering objects to transfer.
/// </summary>
public record HttpData
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
