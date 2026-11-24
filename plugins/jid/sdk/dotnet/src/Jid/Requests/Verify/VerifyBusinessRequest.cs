using System.ComponentModel.DataAnnotations;
using Jid.Core.Validation.Attributes;
using Jid.Models.Enums;

namespace Jid.Requests.Verify;

/// <summary>
/// The inputs of the VerifyBusiness operation.
/// </summary>
public sealed record VerifyBusinessRequest
{
    /// <summary>
    /// Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// What the business is about to do for you. Default general_commerce when jurisdiction or amount is given. Rules: https://jid.com/decision-rules
    /// </summary>
    public Activity? Activity { get; init; }

    /// <summary>
    /// US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code.
    /// </summary>
    [RegularExpression("^(US-[A-Z]{2}|[A-Z]{2})$")]
    public string? Jurisdiction { get; init; }

    /// <summary>
    /// Transaction amount. Context only: recorded on the receipt, never changes the rules.
    /// </summary>
    [Minimum(0.0)]
    public double? Amount { get; init; }

    /// <summary>
    /// ISO 4217 code for amount. Default USD.
    /// </summary>
    [RegularExpression("^[A-Z]{3}$")]
    public string? Currency { get; init; }
}
