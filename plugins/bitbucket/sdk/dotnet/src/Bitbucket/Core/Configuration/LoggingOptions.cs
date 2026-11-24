using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Bitbucket.Core.Logging;

namespace Bitbucket.Core.Configuration;

public record LoggingOptions
{
    public ILoggerFactory? LoggerFactory { get; init; }

    public bool LogRequestHeaders { get; init; }

    public bool LogResponseHeaders { get; init; }

    public bool LogRequestBody { get; init; }

    public int BodySizeLimit { get; init; } = 32 * 1024;

    public IReadOnlyCollection<string> LoggableContentTypes { get; init; } =
        ["application/json", "application/x-www-form-urlencoded"];

    public IReadOnlyCollection<string> RedactedHeaders { get; init; } = [];

    public IReadOnlyCollection<string> RedactedKeys { get; init; } =
        ["sig", "signature", "access_token", "apikey", "api_key",
         "client_secret", "password", "refresh_token", "code", "assertion", "client_assertion"];

    public IReadOnlyCollection<string> UnmaskHeaders { get; init; } = [];

    public string RedactionPlaceholder { get; init; } = "***";
}

internal static class LoggingOptionsExtensions
{
    extension(LoggingOptions options)
    {
        public LoggingOptions WithEnvironmentDefaults(string variable)
        {
            if (options.LoggerFactory is not null)
                return options;

            return EnvironmentVariables.Get(variable)?.Trim().ToLowerInvariant() switch
            {
                "info" => options with { LoggerFactory = new ConsoleErrorLoggerFactory(LogLevel.Information) },
                "debug" => options with
                {
                    LoggerFactory = new ConsoleErrorLoggerFactory(LogLevel.Debug),
                    LogRequestHeaders = true,
                    LogResponseHeaders = true,
                },
                "trace" => options with
                {
                    LoggerFactory = new ConsoleErrorLoggerFactory(LogLevel.Trace),
                    LogRequestHeaders = true,
                    LogResponseHeaders = true,
                    LogRequestBody = true,
                },
                _ => options,
            };
        }
    }
}
