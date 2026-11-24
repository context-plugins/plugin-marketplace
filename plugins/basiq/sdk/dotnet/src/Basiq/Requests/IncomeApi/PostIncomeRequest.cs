using Basiq.Models;

namespace Basiq.Requests.IncomeApi;

/// <summary>
/// The inputs of the PostIncome operation.
/// </summary>
public sealed record PostIncomeRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }

    public UsersIncomeRequest? Body { get; init; }
}
