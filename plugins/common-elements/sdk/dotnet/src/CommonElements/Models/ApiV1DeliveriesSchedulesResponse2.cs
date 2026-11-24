using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record ApiV1DeliveriesSchedulesResponse2
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    [JsonPropertyName("data")]
    public required Data5CommonelementsComBulkDeliveryApi Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
