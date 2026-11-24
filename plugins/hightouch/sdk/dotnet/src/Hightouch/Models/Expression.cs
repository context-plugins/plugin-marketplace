using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record Expression
{
    /// <summary>
    /// Construct a type with a set of properties K of type T
    /// </summary>
    [JsonPropertyName("days")]
    public required RecordDayBooleanOrUndefined Days { get; init; }

    [JsonPropertyName("time")]
    public required string Time { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
