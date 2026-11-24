namespace CarsXe.Requests.Auth;

/// <summary>
/// The inputs of the ValidateKey operation.
/// </summary>
public sealed record ValidateKeyRequest
{
    /// <summary>
    /// Your CarsXE API key
    /// </summary>
    public required string Key { get; init; }
}
