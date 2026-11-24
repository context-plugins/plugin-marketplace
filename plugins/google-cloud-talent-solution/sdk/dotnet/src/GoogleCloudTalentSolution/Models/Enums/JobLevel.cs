using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// The experience level associated with the job, such as "Entry Level".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobLevel>))]
public sealed record JobLevel : OpenStringEnum<JobLevel>
{
    private JobLevel(string value) : base(value)
    {
    }

    public static readonly JobLevel JobLevelUnspecified = new("JOB_LEVEL_UNSPECIFIED");

    public static readonly JobLevel EntryLevel = new("ENTRY_LEVEL");

    public static readonly JobLevel Experienced = new("EXPERIENCED");

    public static readonly JobLevel Manager = new("MANAGER");

    public static readonly JobLevel Director = new("DIRECTOR");

    public static readonly JobLevel Executive = new("EXECUTIVE");

    public TResult Match<TResult>(Func<TResult> onJobLevelUnspecified,
        Func<TResult> onEntryLevel,
        Func<TResult> onExperienced,
        Func<TResult> onManager,
        Func<TResult> onDirector,
        Func<TResult> onExecutive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JobLevelUnspecified => onJobLevelUnspecified(),
            _ when this == EntryLevel => onEntryLevel(),
            _ when this == Experienced => onExperienced(),
            _ when this == Manager => onManager(),
            _ when this == Director => onDirector(),
            _ when this == Executive => onExecutive(),
            _ => otherwise(Value)
        };

    public void Match(Action onJobLevelUnspecified,
        Action onEntryLevel,
        Action onExperienced,
        Action onManager,
        Action onDirector,
        Action onExecutive,
        Action<string> otherwise)
    {
        if (this == JobLevelUnspecified) onJobLevelUnspecified();
        else if (this == EntryLevel) onEntryLevel();
        else if (this == Experienced) onExperienced();
        else if (this == Manager) onManager();
        else if (this == Director) onDirector();
        else if (this == Executive) onExecutive();
        else otherwise(Value);
    }
}
