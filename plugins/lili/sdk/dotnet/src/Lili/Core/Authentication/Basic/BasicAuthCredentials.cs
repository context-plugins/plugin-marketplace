using System;
using System.Text;

namespace Lili.Core.Authentication.Basic;

public sealed class BasicAuthCredentials
{
    public required string Username { get; init; }
    public required string Password { get; init; }

    public string Encode()
    {
        var raw = $"{Username}:{Password}";
        var bytes = Encoding.UTF8.GetBytes(raw);
        return Convert.ToBase64String(bytes);
    }
}

internal static class BasicAuthCredentialsExtensions
{
    extension(BasicAuthCredentials? credentials)
    {
        public BasicAuthCredentials? WithEnvironmentDefaults(string usernameVariable, string passwordVariable)
        {
            if (credentials is not null)
                return credentials;

            return EnvironmentVariables.Get(usernameVariable) is { } username && EnvironmentVariables.Get(passwordVariable) is { } password
                ? new BasicAuthCredentials { Username = username, Password = password }
                : null;
        }
    }
}
