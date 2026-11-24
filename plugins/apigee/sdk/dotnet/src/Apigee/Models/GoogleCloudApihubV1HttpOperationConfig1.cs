using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The HTTP operation config.
/// </summary>
public record GoogleCloudApihubV1HttpOperationConfig1
{
    /// <summary>
    /// Required. Spec resource name: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec")]
    public string? Spec { get; init; }

    /// <summary>
    /// Required. HTTP path of the operation within the referenced spec. Match is exact (no template substitution): the path here must appear verbatim on an APIOperationRevision belonging to the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// Required. HTTP method of the operation within the referenced spec. (GET / PUT / POST / DELETE / OPTIONS / HEAD / PATCH / TRACE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("method")]
    public Method1? Method { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
