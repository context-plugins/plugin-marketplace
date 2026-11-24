using Paid.Models;

namespace Paid.Requests.Credits;

/// <summary>
/// The inputs of the CreateCreditCurrency operation.
/// </summary>
public sealed record CreateCreditCurrencyOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateCreditCurrencyRequest? Body { get; init; }
}
