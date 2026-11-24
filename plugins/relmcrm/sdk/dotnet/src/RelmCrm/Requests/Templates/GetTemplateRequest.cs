namespace RelmCrm.Requests.Templates;

/// <summary>
/// The inputs of the GetTemplate operation.
/// </summary>
public sealed record GetTemplateRequest
{
    public required string Id { get; init; }
}
