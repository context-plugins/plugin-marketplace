using FinixApiReference.Models;

namespace FinixApiReference.Requests.BalanceAdjustments;

/// <summary>
/// The inputs of the CreateBalanceAdjustment operation.
/// </summary>
public sealed record CreateBalanceAdjustmentRequest
{
    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required CreateBalanceAdjustment Body { get; init; }
}
