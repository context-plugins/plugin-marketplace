namespace AmazonLex.Requests.Builtins;

/// <summary>
/// The inputs of the GetBuiltinIntent operation.
/// </summary>
public sealed record GetBuiltinIntentOperationRequest
{
    public required string Signature { get; init; }
}
