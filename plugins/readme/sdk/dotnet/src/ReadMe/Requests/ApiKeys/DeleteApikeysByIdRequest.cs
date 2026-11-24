namespace ReadMe.Requests.ApiKeys;

/// <summary>
/// The inputs of the DeleteApikeysById operation.
/// </summary>
public sealed record DeleteApikeysByIdRequest
{
    public required string Id { get; init; }
}
