namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Disposablephone operation.
/// </summary>
public sealed record DisposablephoneRequest
{
    /// <summary>
    /// The phone number to check in E.164 format (e.g., +12085813945)
    /// </summary>
    public required string Phone { get; init; }
}
