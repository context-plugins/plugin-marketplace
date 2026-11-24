using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Servers;

[JsonConverter(typeof(StringEnumConverter<ServerEnvironment>))]
public sealed record ServerEnvironment : ClosedStringEnum<ServerEnvironment>
{
    private ServerEnvironment(string value) : base(value)
    {
    }

    /// <summary>
    /// AWS North America Production Server
    /// </summary>
    public static readonly ServerEnvironment Production = new("production");

    /// <summary>
    /// AWS Europe Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment2 = new("environment2");

    /// <summary>
    /// AWS Australia Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment3 = new("environment3");

    /// <summary>
    /// Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment4 = new("environment4");

    /// <summary>
    /// Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment5 = new("environment5");

    /// <summary>
    /// AWS Australia Production Server, GCP North America Production Server, AWS Australia Production Server, AWS Australia Production Server, AWS North America Production Server, AWS North America Production Server, GCP North America Production Server, AWS Australia Production Server, GCP North America Production Server, GCP North America Production Server, GCP North America Production Server, GCP North America Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment6 = new("environment6");

    /// <summary>
    /// Azure North America Production Server, GCP Europe Production Server, Azure North America Production Server, Azure North America Production Server, AWS Europe Production Server, AWS Europe Production Server, GCP Europe Production Server, Azure North America Production Server, GCP Europe Production Server, GCP Europe Production Server, GCP Europe Production Server, GCP Europe Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment7 = new("environment7");

    /// <summary>
    /// Azure Europe Production Server, AWS Australia Production Server, AWS Australia Production Server, Azure Europe Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment8 = new("environment8");

    /// <summary>
    /// Azure North America Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment9 = new("environment9");

    /// <summary>
    /// Azure Europe Production Server
    /// </summary>
    public static readonly ServerEnvironment Environment10 = new("environment10");

    public static ServerEnvironment Default() => Production;

    internal TResult Match<TResult>(Func<TResult> onProduction,
        Func<TResult> onEnvironment2,
        Func<TResult> onEnvironment3,
        Func<TResult> onEnvironment4,
        Func<TResult> onEnvironment5,
        Func<TResult> onEnvironment6,
        Func<TResult> onEnvironment7,
        Func<TResult> onEnvironment8,
        Func<TResult> onEnvironment9,
        Func<TResult> onEnvironment10) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ when this == Environment2 => onEnvironment2(),
            _ when this == Environment3 => onEnvironment3(),
            _ when this == Environment4 => onEnvironment4(),
            _ when this == Environment5 => onEnvironment5(),
            _ when this == Environment6 => onEnvironment6(),
            _ when this == Environment7 => onEnvironment7(),
            _ when this == Environment8 => onEnvironment8(),
            _ when this == Environment9 => onEnvironment9(),
            _ when this == Environment10 => onEnvironment10(),
            _ => throw new InvalidOperationException($"{nameof(ServerEnvironment)} holds no known value.")
        };
}
