using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the GetSignatureRequest operation.
/// </summary>
public sealed record GetSignatureRequest
{
    /// <summary>
    /// Filter on the field <c>signatures[].account_email</c>
    /// </summary>
    [Format(FormatKind.Email)]
    public string? AccountEmail { get; init; }

    /// <summary>
    /// Filter on the field <c>title</c> to search for documents containing the serach term.
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// Filter on the field <c>signatures[].status_code</c> with one of the valid Signature states
    /// </summary>
    public SignatureStatusCode? SignatureStatus { get; init; }

    /// <summary>
    /// Filter on the field <c>status_overall</c> with one of the valid Signature states
    /// </summary>
    public SignatureStatusOverall? StatusOverall { get; init; }

    /// <summary>
    /// Page number for pagination. By default pagination is disabled.
    /// </summary>
    [Minimum(1.0)]
    public double? PageNumber { get; init; }

    /// <summary>
    /// Page size for pagination.
    /// </summary>
    [Minimum(0.0)]
    public double PageSize { get; init; } = 50d;
}
