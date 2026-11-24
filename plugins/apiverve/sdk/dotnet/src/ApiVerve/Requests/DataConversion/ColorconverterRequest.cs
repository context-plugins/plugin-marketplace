namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Colorconverter operation.
/// </summary>
public sealed record ColorconverterRequest
{
    /// <summary>
    /// The color in hexadecimal format (e.g., FF0000). Make sure you ommit the #
    /// </summary>
    public required string Hex { get; init; }
}
