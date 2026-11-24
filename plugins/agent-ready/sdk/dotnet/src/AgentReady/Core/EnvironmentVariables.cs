using System;

namespace AgentReady.Core;

internal static class EnvironmentVariables
{
    public static string? Get(string name)
    {
        var raw = Environment.GetEnvironmentVariable(name);
        return string.IsNullOrWhiteSpace(raw) ? null : raw;
    }
}
