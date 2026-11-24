using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the GetComplianceBulk operation.
/// </summary>
public sealed record GetComplianceBulkRequest
{
    /// <summary>
    /// Set to <c>candid</c> to render this record the way Candid's documentation describes it — notably booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or what they say.
    /// </summary>
    public Compat? Compat { get; init; }

    public required BulkCompliance Body { get; init; }
}
