using Airtable.Models;

namespace Airtable.Requests.Bases;

/// <summary>
/// The inputs of the CreateBase operation.
/// </summary>
public sealed record CreateBaseOperationRequest
{
    public required CreateBaseRequest Body { get; init; }
}
