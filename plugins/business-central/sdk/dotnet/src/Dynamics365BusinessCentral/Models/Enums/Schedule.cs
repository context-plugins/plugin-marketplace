using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// When to schedule the installation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Schedule>))]
public sealed record Schedule : OpenStringEnum<Schedule>
{
    private Schedule(string value) : base(value)
    {
    }

    public static readonly Schedule CurrentVersion = new("Current version");

    public static readonly Schedule NextMinorVersion = new("Next minor version");

    public static readonly Schedule NextMajorVersion = new("Next major version");

    public TResult Match<TResult>(Func<TResult> onCurrentVersion,
        Func<TResult> onNextMinorVersion,
        Func<TResult> onNextMajorVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CurrentVersion => onCurrentVersion(),
            _ when this == NextMinorVersion => onNextMinorVersion(),
            _ when this == NextMajorVersion => onNextMajorVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurrentVersion,
        Action onNextMinorVersion,
        Action onNextMajorVersion,
        Action<string> otherwise)
    {
        if (this == CurrentVersion) onCurrentVersion();
        else if (this == NextMinorVersion) onNextMinorVersion();
        else if (this == NextMajorVersion) onNextMajorVersion();
        else otherwise(Value);
    }
}
