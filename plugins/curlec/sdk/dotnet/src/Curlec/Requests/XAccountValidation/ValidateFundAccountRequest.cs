using Curlec.Models;

namespace Curlec.Requests.XAccountValidation;

/// <summary>
/// The inputs of the ValidateFundAccount operation.
/// </summary>
public sealed record ValidateFundAccountRequest
{
    public required FundAccountsValidationsRequest Body { get; init; }
}
