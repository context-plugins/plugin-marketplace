using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record PaymentsTransfersRequest
{
    [JsonPropertyName("transfers")]
    public required IReadOnlyList<Transfer1> Transfers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
