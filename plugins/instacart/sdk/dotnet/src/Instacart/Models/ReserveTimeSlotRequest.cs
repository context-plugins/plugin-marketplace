using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record ReserveTimeSlotRequest
{
    /// <summary>
    /// The identifier of the service option time slot to reserve.
    /// </summary>
    [JsonPropertyName("service_option_id")]
    public required string ServiceOptionId { get; init; }

    /// <summary>
    /// The customer's cart details to associate with the reservation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cart")]
    public Cart? Cart { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
