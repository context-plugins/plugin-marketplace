using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record WaitAndContinueSpecification
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("waitingResponse")]
    public ResponseSpecification? WaitingResponse { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continueResponse")]
    public ResponseSpecification? ContinueResponse { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stillWaitingResponse")]
    public StillWaitingResponseSpecification? StillWaitingResponse { get; init; }

    /// <summary>
    /// Specifies whether the bot will wait for a user to respond. When this field is false, wait and continue responses for a slot aren't used. If the active field isn't specified, the default is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
