using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record AdditionalDataset
{
    /// <summary>
    /// The name of the additional dataset. Valid names: "holiday" and "weather".
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    /// <summary>
    /// Weather Index To enable the Weather Index, do not specify a value for Configuration. Holidays Holidays To enable Holidays, set CountryCode to one of the following two-letter country codes: "AL" - ALBANIA "AR" - ARGENTINA "AT" - AUSTRIA "AU" - AUSTRALIA "BA" - BOSNIA HERZEGOVINA "BE" - BELGIUM "BG" - BULGARIA "BO" - BOLIVIA "BR" - BRAZIL "BY" - BELARUS "CA" - CANADA "CL" - CHILE "CO" - COLOMBIA "CR" - COSTA RICA "HR" - CROATIA "CZ" - CZECH REPUBLIC "DK" - DENMARK "EC" - ECUADOR "EE" - ESTONIA "ET" - ETHIOPIA "FI" - FINLAND "FR" - FRANCE "DE" - GERMANY "GR" - GREECE "HU" - HUNGARY "IS" - ICELAND
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Configuration")]
    public IReadOnlyDictionary<string, object>? Configuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
