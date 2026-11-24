using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record UploadBidsInvalidBidResponseError
{
    /// <summary>
    /// description of the error
    /// </summary>
    [JsonPropertyName("error")]
    [MinLength(1)]
    public required string Error { get; init; }

    [JsonPropertyName("bidsValidation")]
    [MinLength(1)]
    public required IReadOnlyList<InvalidBidOutput> BidsValidation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
