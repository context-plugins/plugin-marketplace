using Leadspace.Models;

namespace Leadspace.Requests.Intent;

/// <summary>
/// The inputs of the ScoreCompanyIntent operation.
/// </summary>
public sealed record ScoreCompanyIntentRequest
{
    public required IntentRequest Body { get; init; }
}
