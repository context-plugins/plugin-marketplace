namespace FinixApiReference.Requests.SubscriptionPlans;

/// <summary>
/// The inputs of the GetSubscriptionPlan operation.
/// </summary>
public sealed record GetSubscriptionPlanRequest
{
    /// <summary>
    /// The ID of the <c>Subscription Plan</c>.
    /// </summary>
    public required string SubscriptionPlanId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
