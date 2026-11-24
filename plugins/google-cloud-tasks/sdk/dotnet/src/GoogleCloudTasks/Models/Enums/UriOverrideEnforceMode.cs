using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

/// <summary>
/// URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UriOverrideEnforceMode>))]
public sealed record UriOverrideEnforceMode : OpenStringEnum<UriOverrideEnforceMode>
{
    private UriOverrideEnforceMode(string value) : base(value)
    {
    }

    public static readonly UriOverrideEnforceMode UriOverrideEnforceModeUnspecified = new(
        "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED");

    public static readonly UriOverrideEnforceMode IfNotExists = new("IF_NOT_EXISTS");

    public static readonly UriOverrideEnforceMode Always = new("ALWAYS");

    public TResult Match<TResult>(Func<TResult> onUriOverrideEnforceModeUnspecified,
        Func<TResult> onIfNotExists,
        Func<TResult> onAlways,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UriOverrideEnforceModeUnspecified => onUriOverrideEnforceModeUnspecified(),
            _ when this == IfNotExists => onIfNotExists(),
            _ when this == Always => onAlways(),
            _ => otherwise(Value)
        };

    public void Match(Action onUriOverrideEnforceModeUnspecified,
        Action onIfNotExists,
        Action onAlways,
        Action<string> otherwise)
    {
        if (this == UriOverrideEnforceModeUnspecified) onUriOverrideEnforceModeUnspecified();
        else if (this == IfNotExists) onIfNotExists();
        else if (this == Always) onAlways();
        else otherwise(Value);
    }
}
