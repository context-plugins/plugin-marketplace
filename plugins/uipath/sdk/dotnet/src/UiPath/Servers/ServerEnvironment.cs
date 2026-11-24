using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Orchestrator
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    /// <summary>
    /// UiPath Automation Cloud Orchestrator
    /// </summary>
    public static readonly ServerEnvironment Environment2 = new("environment2");

    /// <summary>
    /// UiPath Automation Cloud Platform
    /// </summary>
    public static readonly ServerEnvironment Environment3 = new("environment3");

    public static ServerEnvironment Default() => Production;

    internal TResult Match<TResult>(Func<TResult> onProduction,
        Func<TResult> onEnvironment2,
        Func<TResult> onEnvironment3) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ when this == Environment2 => onEnvironment2(),
            _ when this == Environment3 => onEnvironment3(),
            _ => throw new InvalidOperationException($"{nameof(ServerEnvironment)} holds no known value.")
        };
}
