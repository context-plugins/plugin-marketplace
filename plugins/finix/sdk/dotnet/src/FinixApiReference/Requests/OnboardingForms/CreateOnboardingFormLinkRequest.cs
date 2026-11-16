using FinixApiReference.Models;

namespace FinixApiReference.Requests.OnboardingForms;

/// <summary>
/// The inputs of the CreateOnboardingFormLink operation.
/// </summary>
public sealed record CreateOnboardingFormLinkRequest
{
    /// <summary>
    /// The ID of the <c>onboarding_form</c> resource.
    /// </summary>
    public required string OnboardingFormId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required OnboardingLinkDetails Body { get; init; }
}
