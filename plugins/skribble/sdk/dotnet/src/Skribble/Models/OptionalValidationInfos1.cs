using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// (Optional) Additional information details
/// </summary>
public record OptionalValidationInfos1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signer")]
    public IReadOnlyList<Signer>? Signer { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public FormatInfosResponse? Format { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validation")]
    public ValidationInfosResponse? Validation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
