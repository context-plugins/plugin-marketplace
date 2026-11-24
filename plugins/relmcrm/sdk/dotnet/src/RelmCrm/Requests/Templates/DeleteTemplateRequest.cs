namespace RelmCrm.Requests.Templates;

/// <summary>
/// The inputs of the DeleteTemplate operation.
/// </summary>
public sealed record DeleteTemplateRequest
{
    public required string Id { get; init; }
}
