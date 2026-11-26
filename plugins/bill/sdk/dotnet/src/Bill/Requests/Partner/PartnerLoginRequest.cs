using Bill.Models;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the PartnerLogin operation.
/// </summary>
public sealed record PartnerLoginRequest
{
    public required PartnerLoginRequestDto Body { get; init; }
}
