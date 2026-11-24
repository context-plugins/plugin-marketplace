using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersPurchaseRequest1
{
    /// <summary>
    /// DID ID from numbers_index, numbers_purchase_create
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Identity ID to associate with the number, from identities_index, identities_create
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity_id")]
    public int? IdentityId { get; init; }

    /// <summary>
    /// Enable or disable inbound call recording for this DID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("call_recording_enabled")]
    public bool? CallRecordingEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
