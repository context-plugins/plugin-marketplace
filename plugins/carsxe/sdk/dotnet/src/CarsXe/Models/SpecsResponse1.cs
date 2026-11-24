using System.Collections.Generic;
using System.Text.Json.Serialization;
using CarsXe.Core.Models;

namespace CarsXe.Models;

/// <summary>
/// Full vehicle specifications (only present when <c>decodeVIN=true</c>).
/// </summary>
public record SpecsResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    public bool? Success { get; init; }

    /// <summary>
    /// Echo of the input parameters specified by the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public object? Input { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public string? Timestamp { get; init; }

    /// <summary>
    /// A map of specifications about the VIN (year, make, model, trim, style, type, size, category, made_in, doors, fuel_type, engine, transmission, drivetrain, dimensions, pricing and more).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public object? Attributes { get; init; }

    /// <summary>
    /// Available color options based on the vehicle's year, make and model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("colors")]
    public IReadOnlyList<Color>? Colors { get; init; }

    /// <summary>
    /// Equipment details based on the vehicle's year, make and model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("equipment")]
    public object? Equipment { get; init; }

    /// <summary>
    /// Standard vehicle warranties by type, miles and months.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warranties")]
    public IReadOnlyList<Warranty>? Warranties { get; init; }

    /// <summary>
    /// More information on the vehicle from the deep data search (present when <c>deepdata=1</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deepdata")]
    public object? Deepdata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
