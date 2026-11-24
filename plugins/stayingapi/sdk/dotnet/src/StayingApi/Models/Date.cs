using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation.Attributes;

namespace StayingApi.Models;

public record Date
{
    [JsonPropertyName("date")]
    [RegularExpression("^\\d{4}-\\d{2}-\\d{2}$")]
    public required string DateValue { get; init; }

    [JsonPropertyName("available")]
    public required bool Available { get; init; }

    [JsonPropertyName("minNights")]
    [Maximum(2147483647)]
    [ExclusiveMinimum(0)]
    public required int MinNights { get; init; }

    [JsonPropertyName("checkIn")]
    public required bool CheckIn { get; init; }

    [JsonPropertyName("checkOut")]
    public required bool CheckOut { get; init; }

    [JsonPropertyName("bookable")]
    public required bool Bookable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
