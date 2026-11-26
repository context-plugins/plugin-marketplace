using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// Business Central Online (Common Endpoint), Business Central Administration Center, Business Central Administration Center, Business Central Online Automation API, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Administration Center, Business Central Administration Center, Business Central Administration Center, Business Central Online Automation API, Business Central Online Automation API, Business Central Online Automation API, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Administration Center, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation API, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation API, Business Central Online Automation API, Business Central Administration Center, Business Central Administration Center, Business Central Administration Center, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint)
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    /// <summary>
    /// Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises
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
