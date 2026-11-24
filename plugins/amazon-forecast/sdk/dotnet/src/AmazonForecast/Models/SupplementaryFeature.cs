using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record SupplementaryFeature
{
    /// <summary>
    /// The name of the feature. Valid values: "holiday" and "weather".
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    /// <summary>
    /// Weather Index To enable the Weather Index, set the value to "true" Holidays To enable Holidays, specify a country with one of the following two-letter country codes: "AL" - ALBANIA "AR" - ARGENTINA "AT" - AUSTRIA "AU" - AUSTRALIA "BA" - BOSNIA HERZEGOVINA "BE" - BELGIUM "BG" - BULGARIA "BO" - BOLIVIA "BR" - BRAZIL "BY" - BELARUS "CA" - CANADA "CL" - CHILE "CO" - COLOMBIA "CR" - COSTA RICA "HR" - CROATIA "CZ" - CZECH REPUBLIC "DK" - DENMARK "EC" - ECUADOR "EE" - ESTONIA "ET" - ETHIOPIA "FI" - FINLAND "FR" - FRANCE "DE" - GERMANY "GR" - GREECE "HU" - HUNGARY "IS" - ICELAND "IN" - INDIA "IE" - IR
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
