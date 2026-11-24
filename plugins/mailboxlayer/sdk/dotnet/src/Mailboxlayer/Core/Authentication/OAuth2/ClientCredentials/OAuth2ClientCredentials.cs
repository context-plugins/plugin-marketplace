namespace Mailboxlayer.Core.Authentication.OAuth2.ClientCredentials;

public sealed class OAuth2ClientCredentials : IOAuth2Credentials
{
    public required string ClientId { get; init; }
    public required string ClientSecret { get; init; }
    public string? Scope { get; init; }
}

internal static class OAuth2ClientCredentialsExtensions
{
    extension(OAuth2ClientCredentials? credentials)
    {
        public OAuth2ClientCredentials? WithEnvironmentDefaults(string clientIdVariable, string clientSecretVariable, string scopeVariable)
        {
            if (credentials is not null)
                return credentials;

            return EnvironmentVariables.Get(clientIdVariable) is { } clientId && EnvironmentVariables.Get(clientSecretVariable) is { } clientSecret
                ? new OAuth2ClientCredentials { ClientId = clientId, ClientSecret = clientSecret, Scope = EnvironmentVariables.Get(scopeVariable) }
                : null;
        }
    }
}
