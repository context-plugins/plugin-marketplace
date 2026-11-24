using Lusha.Models.Enums;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetSignalOptions operation.
/// </summary>
public sealed record GetSignalOptionsRequest
{
    /// <summary>
    /// The type of object to get signal options for
    /// </summary>
    public required ObjectType ObjectType { get; init; }
}
