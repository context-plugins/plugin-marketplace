using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Partner;

/// <summary>
/// The inputs of the ListPartnerUsers operation.
/// </summary>
public sealed record ListPartnerUsersRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }
}
