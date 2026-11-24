using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record OptionalValidationInfos
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
