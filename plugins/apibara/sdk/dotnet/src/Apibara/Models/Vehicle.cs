using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

/// <summary>
/// Normalized Copart or IAAI auction vehicle record.
/// </summary>
public record Vehicle
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public string? Platform { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lot_number")]
    public string? LotNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vin")]
    public string? Vin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public int? Year { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("make")]
    public string? Make { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// Canonical model-family / series resolved from the generation catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("series")]
    public VehicleSeries? Series { get; init; }

    /// <summary>
    /// Resolved vehicle generation metadata when the source vehicle can be matched unambiguously.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generation")]
    public VehicleGeneration? Generation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fuel_type")]
    public string? FuelType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transmission")]
    public string? Transmission { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("drive_type")]
    public string? DriveType { get; init; }

    /// <summary>
    /// Source-backed odometer readings in miles and kilometres. Missing readings may be null; unknown mileage is not zero.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("odometer")]
    public Odometer? Odometer { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("damage")]
    public string? Damage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auction")]
    public AuctionInfo? Auction { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricing")]
    public PricingInfo? Pricing { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public VehicleLocation? Location { get; init; }

    /// <summary>
    /// Normalized auction sale/title document metadata. issuing_state is the document/title issuer state and is distinct from the auction yard/location state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sale_document")]
    public SaleDocument? SaleDocument { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("media")]
    public MediaInfo? Media { get; init; }

    /// <summary>
    /// Present only when include contains history. Retained sale-history entries for known auction lots of the same VIN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("history")]
    public IReadOnlyList<IncludedVehicleHistoryItem>? History { get; init; }

    /// <summary>
    /// Present only when include contains vin_lots. Other known auction lot records for the same VIN, returned in summary form.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vin_lots")]
    public IReadOnlyList<IncludedVinLot>? VinLots { get; init; }

    /// <summary>
    /// Source-aware detail metadata. IAAI includes normalized inventory sections; auction_information.prebidInformation.reserveMet is a raw IAAI prebid signal and is not equivalent to Copart seller_reserve_met. Copart includes source-backed sale_status (including ess values such as Minimum Bid) and seller_reserve_met when the Copart source explicitly supplies the flag, plus sanitized bid/yard/media metadata. Null in summary view.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public object? Details { get; init; }

    /// <summary>
    /// Normalized vehicle specifications. Field availability varies by auction source and lot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vehicle_specs")]
    public VehicleSpecs? VehicleSpecs { get; init; }

    /// <summary>
    /// Available seller name and name-based classification. Unknown means the source does not supply enough evidence; damage, title and missing valuations do not establish seller type. Name-based classification is inferred, not a verified source category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seller")]
    public Seller? Seller { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
