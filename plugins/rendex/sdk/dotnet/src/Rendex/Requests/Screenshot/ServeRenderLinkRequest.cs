namespace Rendex.Requests.Screenshot;

/// <summary>
/// The inputs of the ServeRenderLink operation.
/// </summary>
public sealed record ServeRenderLinkRequest
{
    /// <summary>
    /// Signed params token
    /// </summary>
    public required string P { get; init; }

    /// <summary>
    /// Owning account id
    /// </summary>
    public required string Uid { get; init; }

    /// <summary>
    /// Expiry (unix seconds)
    /// </summary>
    public required int Exp { get; init; }

    /// <summary>
    /// HMAC signature
    /// </summary>
    public required string Sig { get; init; }
}
