using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DialogAction
{
    /// <summary>
    /// The action that the bot should execute.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// If the dialog action is ElicitSlot, defines the slot to elicit from the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotToElicit")]
    public string? SlotToElicit { get; init; }

    /// <summary>
    /// When true the next message for the intent is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suppressNextMessage")]
    public bool? SuppressNextMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
