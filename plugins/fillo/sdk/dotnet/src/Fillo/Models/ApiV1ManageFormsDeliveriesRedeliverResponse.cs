using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsDeliveriesRedeliverResponse
{
    [JsonPropertyName("redelivered")]
    public required int Redelivered { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
