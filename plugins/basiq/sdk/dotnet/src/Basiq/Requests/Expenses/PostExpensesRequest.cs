using Basiq.Models;

namespace Basiq.Requests.Expenses;

/// <summary>
/// The inputs of the PostExpenses operation.
/// </summary>
public sealed record PostExpensesRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }

    public UsersExpensesRequest? Body { get; init; }
}
