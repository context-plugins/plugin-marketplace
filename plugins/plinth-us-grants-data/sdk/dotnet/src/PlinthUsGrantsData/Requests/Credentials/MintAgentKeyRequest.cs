using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Credentials;

/// <summary>
/// The inputs of the MintAgentKey operation.
/// </summary>
public sealed record MintAgentKeyRequest
{
    /// <summary>
    /// The https origin publishing your key directory, as a structured-field string: "https://your-host.example".
    /// </summary>
    public string? SignatureAgent { get; init; }

    /// <summary>
    /// RFC 9421 covered components and parameters, e.g. sig=("@authority" "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth"
    /// </summary>
    public string? SignatureInput { get; init; }

    /// <summary>
    /// sig=:&lt;base64 ed25519 signature&gt;:  Send all three signature headers or none.
    /// </summary>
    public string? Signature { get; init; }

    public required AgentKeyRequest Body { get; init; }
}
