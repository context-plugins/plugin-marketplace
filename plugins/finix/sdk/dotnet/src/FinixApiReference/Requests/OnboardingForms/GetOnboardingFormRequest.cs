namespace FinixApiReference.Requests.OnboardingForms;

/// <summary>
/// The inputs of the GetOnboardingForm operation.
/// </summary>
public sealed record GetOnboardingFormRequest
{
    /// <summary>
    /// The id of the <c>onboarding_form</c>.
    /// </summary>
    public required string OnboardingFormId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
