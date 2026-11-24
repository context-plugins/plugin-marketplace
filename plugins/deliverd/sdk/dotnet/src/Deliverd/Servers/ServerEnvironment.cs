using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// Deliverd REST API (paths carry the /api/v1 prefix; https://deliverd.dev/llms.txt: "REST API: https://deliverd.dev/api/v1")
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
