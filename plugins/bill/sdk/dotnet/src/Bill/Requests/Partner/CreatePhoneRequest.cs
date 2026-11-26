using Bill.Models;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the CreatePhone operation.
/// </summary>
public sealed record CreatePhoneRequest
{
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }

    public required PhoneVerificationRequestDto Body { get; init; }
}
