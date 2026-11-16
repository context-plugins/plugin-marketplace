namespace FinixApiReference.Requests.ComplianceForms;

/// <summary>
/// The inputs of the GetComplianceForm operation.
/// </summary>
public sealed record GetComplianceFormRequest
{
    /// <summary>
    /// The ID of the <c>Compliance Form</c>.
    /// </summary>
    public required string ComplianceFormId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
