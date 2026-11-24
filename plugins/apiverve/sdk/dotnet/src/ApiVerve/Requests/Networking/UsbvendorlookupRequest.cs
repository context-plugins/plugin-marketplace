namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Usbvendorlookup operation.
/// </summary>
public sealed record UsbvendorlookupRequest
{
    /// <summary>
    /// The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple)
    /// </summary>
    public required string Vendorid { get; init; }

    /// <summary>
    /// The USB product ID in 4-digit hex format (optional)
    /// </summary>
    public string? Productid { get; init; }
}
