namespace Jid.Requests.Screen;

/// <summary>
/// The inputs of the ScreenGet operation.
/// </summary>
public sealed record ScreenGetRequest
{
    public string? Domain { get; init; }

    public string? Url { get; init; }

    public string? Email { get; init; }

    public string? Phone { get; init; }

    public string? CompanyName { get; init; }

    public string? Name { get; init; }

    public string? Context { get; init; }

    public string? Policy { get; init; }

    public double? Amount { get; init; }

    public string? Country { get; init; }

    public string? IpCountry { get; init; }

    public string? IpRegion { get; init; }

    public string? IpAsn { get; init; }

    public string? BrowserTimezone { get; init; }

    public string? StatedCountry { get; init; }

    public string? Signal { get; init; }

    public string? Site { get; init; }
}
