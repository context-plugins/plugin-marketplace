using System;
using System.Text.Json.Serialization;
using BetterStack.Core.Enum;

namespace BetterStack.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// Better Stack Uptime API (v2 surface — monitors, heartbeats, status pages, on-call)
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    /// <summary>
    /// Better Stack Uptime API (v3 surface — incidents)
    /// </summary>
    public static readonly ServerEnvironment Environment2 = new("environment2");

    public static ServerEnvironment Default() => Production;

    internal TResult Match<TResult>(Func<TResult> onProduction, Func<TResult> onEnvironment2) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ when this == Environment2 => onEnvironment2(),
            _ => throw new InvalidOperationException($"{nameof(ServerEnvironment)} holds no known value.")
        };
}
