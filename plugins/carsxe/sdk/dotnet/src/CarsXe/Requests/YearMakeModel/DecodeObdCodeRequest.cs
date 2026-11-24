namespace CarsXe.Requests.YearMakeModel;

/// <summary>
/// The inputs of the DecodeObdCode operation.
/// </summary>
public sealed record DecodeObdCodeRequest
{
    /// <summary>
    /// The OBD code.
    /// </summary>
    public required string Code { get; init; }
}
