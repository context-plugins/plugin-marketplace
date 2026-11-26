using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Schedule1>))]
public sealed record Schedule1 : OpenStringEnum<Schedule1>
{
    private Schedule1(string value) : base(value)
    {
    }

    public static readonly Schedule1 CurrentVersion = new("Current version");

    public static readonly Schedule1 NextMinorVersion = new("Next minor version");

    public static readonly Schedule1 NextMajorVersion = new("Next major version");

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
