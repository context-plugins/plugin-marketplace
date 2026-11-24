namespace Curlec.Requests.XAccountValidation;

/// <summary>
/// The inputs of the FetchFundAccountValidation operation.
/// </summary>
public sealed record FetchFundAccountValidationRequest
{
    /// <summary>
    /// Unique identifier of the fund account validation (e.g. <c>fav_00000000000001</c>).
    /// </summary>
    public required string ValidationId { get; init; }
}
