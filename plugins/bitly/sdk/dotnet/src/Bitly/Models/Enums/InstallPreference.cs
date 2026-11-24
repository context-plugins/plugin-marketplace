using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InstallPreference>))]
public sealed record InstallPreference : OpenStringEnum<InstallPreference>
{
    private InstallPreference(string value) : base(value)
    {
    }

    public static readonly InstallPreference NoInstall = new("no_install");

    public static readonly InstallPreference AutoInstall = new("auto_install");

    public static readonly InstallPreference PromoteInstall = new("promote_install");

    public TResult Match<TResult>(Func<TResult> onNoInstall,
        Func<TResult> onAutoInstall,
        Func<TResult> onPromoteInstall,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoInstall => onNoInstall(),
            _ when this == AutoInstall => onAutoInstall(),
            _ when this == PromoteInstall => onPromoteInstall(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoInstall, Action onAutoInstall, Action onPromoteInstall, Action<string> otherwise)
    {
        if (this == NoInstall) onNoInstall();
        else if (this == AutoInstall) onAutoInstall();
        else if (this == PromoteInstall) onPromoteInstall();
        else otherwise(Value);
    }
}
