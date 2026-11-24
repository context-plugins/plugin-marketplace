namespace DoiT.Requests.Assets;

/// <summary>
/// The inputs of the CreateAsset operation.
/// </summary>
public sealed record CreateAssetRequest
{
    /// <summary>
    /// Asset type. For example, amazon-web-services
    /// </summary>
    public string Type { get; init; } = "amazon-web-services";

    /// <summary>
    /// Asset mode.
    /// </summary>
    public string Mode { get; init; } = "New";

    /// <summary>
    /// The desired name of the account.
    /// </summary>
    public string AccountName { get; init; } = "Account name";

    /// <summary>
    /// The root account email.
    /// </summary>
    public string? RootEmail { get; init; }
}
