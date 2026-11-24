using Shortcut.Models;

namespace Shortcut.Requests.Documents;

/// <summary>
/// The inputs of the CreateDoc operation.
/// </summary>
public sealed record CreateDocRequest
{
    public required CreateDoc Body { get; init; }
}
