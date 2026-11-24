using System;
using System.Text.Json.Serialization;
using ReadMe.Core.Enum;

namespace ReadMe.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// ReadMe Metrics API, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe API v2 base URL, ReadMe Metrics API, ReadMe API v2 base URL, ReadMe API v2 base URL
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    /// <summary>
    /// ReadMe API v1 (legacy)
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
