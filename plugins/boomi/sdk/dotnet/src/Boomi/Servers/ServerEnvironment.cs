using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// Boomi Platform REST API, Boomi DataHub Platform API, Topic-specific endpoint URL. Each event topic has a unique REST API URL obtained from the Event Streams UI in the Boomi platform., Boomi DataHub Platform API, Boomi Platform REST API, Boomi DataHub Platform API, Boomi DataHub Platform API, Boomi DataHub Platform API
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    public static ServerEnvironment Default() => Production;

    internal TResult Match<TResult>(Func<TResult> onProduction) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ => throw new InvalidOperationException($"{nameof(ServerEnvironment)} holds no known value.")
        };
}
