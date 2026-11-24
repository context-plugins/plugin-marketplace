using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateBot operation.
/// </summary>
public sealed record CreateBotOperationRequest
{
    public CreateBotRequest? Body { get; init; }
}
