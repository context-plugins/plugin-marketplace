namespace Curlec.Requests.XAccountValidation;

/// <summary>
/// The inputs of the ListFundAccountValidations operation.
/// </summary>
public sealed record ListFundAccountValidationsRequest
{
    /// <summary>
    /// Unix timestamp. Only validations created from this timestamp onwards are returned.
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp. Only validations created before this timestamp are returned.
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of validation records to return. Default: 10. Maximum: 100.
    /// </summary>
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of validation records to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;
}
