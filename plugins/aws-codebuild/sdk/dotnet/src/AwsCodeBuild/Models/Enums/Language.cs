using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The programming language for the Docker images.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Language>))]
public sealed record Language : OpenStringEnum<Language>
{
    private Language(string value) : base(value)
    {
    }

    public static readonly Language Java = new("JAVA");

    public static readonly Language Python = new("PYTHON");

    public static readonly Language NodeJs = new("NODE_JS");

    public static readonly Language Ruby = new("RUBY");

    public static readonly Language Golang = new("GOLANG");

    public static readonly Language Docker = new("DOCKER");

    public static readonly Language Android = new("ANDROID");

    public static readonly Language Dotnet = new("DOTNET");

    public static readonly Language Base = new("BASE");

    public static readonly Language Php = new("PHP");

    public TResult Match<TResult>(Func<TResult> onJava,
        Func<TResult> onPython,
        Func<TResult> onNodeJs,
        Func<TResult> onRuby,
        Func<TResult> onGolang,
        Func<TResult> onDocker,
        Func<TResult> onAndroid,
        Func<TResult> onDotnet,
        Func<TResult> onBase,
        Func<TResult> onPhp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Java => onJava(),
            _ when this == Python => onPython(),
            _ when this == NodeJs => onNodeJs(),
            _ when this == Ruby => onRuby(),
            _ when this == Golang => onGolang(),
            _ when this == Docker => onDocker(),
            _ when this == Android => onAndroid(),
            _ when this == Dotnet => onDotnet(),
            _ when this == Base => onBase(),
            _ when this == Php => onPhp(),
            _ => otherwise(Value)
        };

    public void Match(Action onJava,
        Action onPython,
        Action onNodeJs,
        Action onRuby,
        Action onGolang,
        Action onDocker,
        Action onAndroid,
        Action onDotnet,
        Action onBase,
        Action onPhp,
        Action<string> otherwise)
    {
        if (this == Java) onJava();
        else if (this == Python) onPython();
        else if (this == NodeJs) onNodeJs();
        else if (this == Ruby) onRuby();
        else if (this == Golang) onGolang();
        else if (this == Docker) onDocker();
        else if (this == Android) onAndroid();
        else if (this == Dotnet) onDotnet();
        else if (this == Base) onBase();
        else if (this == Php) onPhp();
        else otherwise(Value);
    }
}
