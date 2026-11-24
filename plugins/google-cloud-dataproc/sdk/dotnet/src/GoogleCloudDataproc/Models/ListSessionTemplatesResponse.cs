using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A list of session templates.
/// </summary>
public record ListSessionTemplatesResponse
{
    /// <summary>
    /// Output only. Session template list
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionTemplates")]
    public IReadOnlyList<SessionTemplate>? SessionTemplates { get; init; }

    /// <summary>
    /// A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
