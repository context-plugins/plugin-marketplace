using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The platform's name.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Platform>))]
public sealed record Platform : OpenStringEnum<Platform>
{
    private Platform(string value) : base(value)
    {
    }

    public static readonly Platform Debian = new("DEBIAN");

    public static readonly Platform AmazonLinux = new("AMAZON_LINUX");

    public static readonly Platform Ubuntu = new("UBUNTU");

    public static readonly Platform WindowsServer = new("WINDOWS_SERVER");

    public TResult Match<TResult>(Func<TResult> onDebian,
        Func<TResult> onAmazonLinux,
        Func<TResult> onUbuntu,
        Func<TResult> onWindowsServer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Debian => onDebian(),
            _ when this == AmazonLinux => onAmazonLinux(),
            _ when this == Ubuntu => onUbuntu(),
            _ when this == WindowsServer => onWindowsServer(),
            _ => otherwise(Value)
        };

    public void Match(Action onDebian,
        Action onAmazonLinux,
        Action onUbuntu,
        Action onWindowsServer,
        Action<string> otherwise)
    {
        if (this == Debian) onDebian();
        else if (this == AmazonLinux) onAmazonLinux();
        else if (this == Ubuntu) onUbuntu();
        else if (this == WindowsServer) onWindowsServer();
        else otherwise(Value);
    }
}
