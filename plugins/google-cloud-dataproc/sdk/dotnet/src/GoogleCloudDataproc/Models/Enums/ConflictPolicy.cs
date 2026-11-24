using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The policy to handle conflicts when migrating resources, defaults to SKIP if not specified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConflictPolicy>))]
public sealed record ConflictPolicy : OpenStringEnum<ConflictPolicy>
{
    private ConflictPolicy(string value) : base(value)
    {
    }

    public static readonly ConflictPolicy ConflictPolicyUnspecified = new("CONFLICT_POLICY_UNSPECIFIED");

    public static readonly ConflictPolicy Skip = new("SKIP");

    public static readonly ConflictPolicy Overwrite = new("OVERWRITE");

    public TResult Match<TResult>(Func<TResult> onConflictPolicyUnspecified,
        Func<TResult> onSkip,
        Func<TResult> onOverwrite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConflictPolicyUnspecified => onConflictPolicyUnspecified(),
            _ when this == Skip => onSkip(),
            _ when this == Overwrite => onOverwrite(),
            _ => otherwise(Value)
        };

    public void Match(Action onConflictPolicyUnspecified, Action onSkip, Action onOverwrite, Action<string> otherwise)
    {
        if (this == ConflictPolicyUnspecified) onConflictPolicyUnspecified();
        else if (this == Skip) onSkip();
        else if (this == Overwrite) onOverwrite();
        else otherwise(Value);
    }
}
