using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The ListRuntimeProjectAttachments method's response.
/// </summary>
public record GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse
{
    /// <summary>
    /// Runtime project attachment for a project if exists, empty otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeProjectAttachment")]
    public GoogleCloudApihubV1RuntimeProjectAttachment1? RuntimeProjectAttachment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
