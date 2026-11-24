using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// CircleCI Production API v1.1, CircleCI Production API, CircleCI Production API, CircleCI Production API, CircleCI Production API, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI Production API, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI Production API v1.1, CircleCI Production API, CircleCI Production API, CircleCI Production API v1.1
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    /// <summary>
    /// CircleCI Production API
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
