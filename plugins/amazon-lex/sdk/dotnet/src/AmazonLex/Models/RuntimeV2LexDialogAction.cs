using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record RuntimeV2LexDialogAction
{
    /// <summary>
    /// The next action that the bot should take in its interaction with the user. The following values are possible: Close – Indicates that there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response. ConfirmIntent – The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?" Delegate – The next action is determined by Amazon Lex V2. ElicitIntent – The next action is to elicit an intent from the user. ElicitSlot – The next action is to elicit a slot valu
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    /// <summary>
    /// The name of the slot that should be elicited from the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotToElicit")]
    public string? SlotToElicit { get; init; }

    /// <summary>
    /// Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a slot, users can spell out their input to make it clear to your bot. Spell by letter - "b" "o" "b" Spell by word - "b as in boy" "o as in oscar" "b as in boy" For more information, see Using spelling to enter slot values .
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotElicitationStyle")]
    public SlotElicitationStyle? SlotElicitationStyle { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subSlotToElicit")]
    public ElicitSubSlot? SubSlotToElicit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
