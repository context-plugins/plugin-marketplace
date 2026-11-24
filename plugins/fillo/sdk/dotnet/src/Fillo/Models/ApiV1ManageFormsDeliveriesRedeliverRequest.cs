using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsDeliveriesRedeliverRequest
{
    [JsonPropertyName("responseIds")]
    [MinLength(1)]
    [MaxLength(200)]
    public required IReadOnlyList<string> ResponseIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
