namespace PlinthUsGrantsData.Core.Authentication.OAuth2.Password;

public sealed class OAuth2PasswordCredentials : IOAuth2Credentials
{
    public required string ClientId { get; init; }
    public string? ClientSecret { get; init; }
    public required string Username { get; init; }
    public required string Password { get; init; }
    public string? Scope { get; init; }
}

internal static class OAuth2PasswordCredentialsExtensions
{
    extension(OAuth2PasswordCredentials? credentials)
    {
        public OAuth2PasswordCredentials? WithEnvironmentDefaults(
            string clientIdVariable,
            string clientSecretVariable,
            string usernameVariable,
            string passwordVariable,
            string scopeVariable)
        {
            if (credentials is not null)
                return credentials;

            return EnvironmentVariables.Get(clientIdVariable) is { } clientId
                && EnvironmentVariables.Get(usernameVariable) is { } username
                && EnvironmentVariables.Get(passwordVariable) is { } password
                    ? new OAuth2PasswordCredentials
                    {
                        ClientId = clientId,
                        ClientSecret = EnvironmentVariables.Get(clientSecretVariable),
                        Username = username,
                        Password = password,
                        Scope = EnvironmentVariables.Get(scopeVariable),
                    }
                    : null;
        }
    }
}
