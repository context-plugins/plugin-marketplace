namespace FinixApiReference.Requests.GatewayIntegrations;

/// <summary>
/// The inputs of the GetGatewayIntegration operation.
/// </summary>
public sealed record GetGatewayIntegrationRequest
{
    /// <summary>
    /// The <c>Gateway Integration</c> ID.
    /// </summary>
    public required string GatewayIntegrationId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
