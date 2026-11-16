using FinixApiReference.Models;

namespace FinixApiReference.Requests.ComplianceForms;

/// <summary>
/// The inputs of the UpdateComplianceForm operation.
/// </summary>
public sealed record UpdateComplianceFormRequest
{
    /// <summary>
    /// The ID of the <c>Compliance Form</c>.
    /// </summary>
    public required string ComplianceFormId { get; init; }

    public required CompleteComplianceForm Body { get; init; }
}
