using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record MetaPlatformConnectorsApi
{
    /// <summary>
    /// URL to institution forgotten password page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forgotten_password_url")]
    public string? ForgottenPasswordUrl { get; init; }

    /// <summary>
    /// Login ID field caption that should be shown on UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("login_id_caption")]
    public string? LoginIdCaption { get; init; }

    /// <summary>
    /// Password field caption that should be shown on UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password_caption")]
    public string? PasswordCaption { get; init; }

    /// <summary>
    /// Secondary loginID caption that should be shown on UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondary_login_id_caption")]
    public string? SecondaryLoginIdCaption { get; init; }

    /// <summary>
    /// Security code caption that should be shown on UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("security_code_caption")]
    public string? SecurityCodeCaption { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
