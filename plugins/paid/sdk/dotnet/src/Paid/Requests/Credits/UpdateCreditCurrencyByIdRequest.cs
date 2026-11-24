using Paid.Models;

namespace Paid.Requests.Credits;

/// <summary>
/// The inputs of the UpdateCreditCurrencyById operation.
/// </summary>
public sealed record UpdateCreditCurrencyByIdRequest
{
    /// <summary>
    /// Credit currency ID.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateCreditCurrencyRequest? Body { get; init; }
}
