using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// Production - Switzerland
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    /// <summary>
    /// Production - Germany
    /// </summary>
    public static readonly ServerEnvironment Environment2 = new("environment2");

    /// <summary>
    /// Production - Switzerland
    /// </summary>
    public static readonly ServerEnvironment Environment3 = new("environment3");

    /// <summary>
    /// Production - Germany
    /// </summary>
    public static readonly ServerEnvironment Environment4 = new("environment4");

    /// <summary>
    /// Production - Switzerland
    /// </summary>
    public static readonly ServerEnvironment Environment5 = new("environment5");

    /// <summary>
    /// Production - Germany
    /// </summary>
    public static readonly ServerEnvironment Environment6 = new("environment6");

    public static ServerEnvironment Default() => Production;

    internal TResult Match<TResult>(Func<TResult> onProduction,
        Func<TResult> onEnvironment2,
        Func<TResult> onEnvironment3,
        Func<TResult> onEnvironment4,
        Func<TResult> onEnvironment5,
        Func<TResult> onEnvironment6) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ when this == Environment2 => onEnvironment2(),
            _ when this == Environment3 => onEnvironment3(),
            _ when this == Environment4 => onEnvironment4(),
            _ when this == Environment5 => onEnvironment5(),
            _ when this == Environment6 => onEnvironment6(),
            _ => throw new InvalidOperationException($"{nameof(ServerEnvironment)} holds no known value.")
        };
}
