using Lili.Models;

namespace Lili.Requests;

/// <summary>
/// The inputs of the RegisterAccount operation.
/// </summary>
public sealed record RegisterAccountRequest
{
    public LeadRequest? Body { get; init; }
}
