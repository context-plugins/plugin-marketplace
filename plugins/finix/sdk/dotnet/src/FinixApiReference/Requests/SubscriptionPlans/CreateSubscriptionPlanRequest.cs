using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.SubscriptionPlans;

/// <summary>
/// The inputs of the CreateSubscriptionPlan operation.
/// </summary>
public sealed record CreateSubscriptionPlanRequest
{
    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required SubscriptionPlansRequest Body { get; init; }
}
