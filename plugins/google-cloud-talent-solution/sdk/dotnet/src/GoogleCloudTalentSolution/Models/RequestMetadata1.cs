using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Required. The meta information collected about the job searcher, used to improve the search quality of the service. The identifiers (such as <c>user_id</c>) are provided by users, and must be unique and consistent.
/// </summary>
public record RequestMetadata1
{
    /// <summary>
    /// Only set when any of domain, session_id and user_id isn't available for some reason. It is highly recommended not to set this field and provide accurate domain, session_id and user_id for the best service experience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowMissingIds")]
    public bool? AllowMissingIds { get; init; }

    /// <summary>
    /// Required if allow_missing_ids is unset or <c>false</c>. A unique session identification string. A session is defined as the duration of an end user's interaction with the service over a certain period. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique session ID. The maximum number of allowed characters is 255.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// The type of device used by the job seeker at the time of the call to the service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deviceInfo")]
    public DeviceInfo2? DeviceInfo { get; init; }

    /// <summary>
    /// Required if allow_missing_ids is unset or <c>false</c>. A unique user identification string, as determined by the client. To have the strongest positive impact on search quality make sure the client-level is unique. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique user ID. The maximum number of allowed characters is 255.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// Required if allow_missing_ids is unset or <c>false</c>. The client-defined scope or source of the service call, which typically is the domain on which the service has been implemented and is currently being run. For example, if the service is being run by client *Foo, Inc.*, on job board www.foo.com and career site www.bar.com, then this field is set to "foo.com" for use on the job board, and "bar.com" for use on the career site. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique domain. The maximum number of allowed characters is 255.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
