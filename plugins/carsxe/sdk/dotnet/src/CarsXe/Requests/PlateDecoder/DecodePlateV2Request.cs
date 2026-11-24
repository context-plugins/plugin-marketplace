namespace CarsXe.Requests.PlateDecoder;

/// <summary>
/// The inputs of the DecodePlateV2 operation.
/// </summary>
public sealed record DecodePlateV2Request
{
    /// <summary>
    /// The vehicle registration number or license plate number.
    /// </summary>
    public required string Plate { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code such as <c>AU</c> for Australia or <c>ZA</c> for South Africa. Optional for <c>US</c>.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// The two letter state code (US) such as <c>CA</c> or <c>NY</c>, an Australian state (e.g. <c>NSW</c>, <c>VIC</c>), or a Canadian province (e.g. <c>ON</c>). Required only for <c>US</c>, <c>AU</c> and <c>CA</c>.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// The district of the vehicle registration number. Required for Pakistan (<c>PK</c>) plates registered in the Khyber-Pakhtunkhwa province.
    /// </summary>
    public string? District { get; init; }

    /// <summary>
    /// Only supported when <c>country=ES</c>. Set to <c>true</c> to always include a VIN. The request is billed 2x and usage counts 2x.
    /// </summary>
    public bool? RequireVin { get; init; }
}
