using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify one of the following templates to use for the clinical note summary. The default is HISTORY_AND_PHYSICAL. HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan. GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal, Intervention, Response, Progress, and Plan. BIRP: Focuses on the patient's behavioral patterns and responses. Examples of sections include Behavior, Inter
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NoteTemplate>))]
public sealed record NoteTemplate : OpenStringEnum<NoteTemplate>
{
    private NoteTemplate(string value) : base(value)
    {
    }

    public static readonly NoteTemplate HistoryAndPhysical = new("HISTORY_AND_PHYSICAL");

    public static readonly NoteTemplate Girpp = new("GIRPP");

    public static readonly NoteTemplate Birp = new("BIRP");

    public static readonly NoteTemplate Sirp = new("SIRP");

    public static readonly NoteTemplate Dap = new("DAP");

    public static readonly NoteTemplate BehavioralSoap = new("BEHAVIORAL_SOAP");

    public static readonly NoteTemplate PhysicalSoap = new("PHYSICAL_SOAP");

    public TResult Match<TResult>(Func<TResult> onHistoryAndPhysical,
        Func<TResult> onGirpp,
        Func<TResult> onBirp,
        Func<TResult> onSirp,
        Func<TResult> onDap,
        Func<TResult> onBehavioralSoap,
        Func<TResult> onPhysicalSoap,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HistoryAndPhysical => onHistoryAndPhysical(),
            _ when this == Girpp => onGirpp(),
            _ when this == Birp => onBirp(),
            _ when this == Sirp => onSirp(),
            _ when this == Dap => onDap(),
            _ when this == BehavioralSoap => onBehavioralSoap(),
            _ when this == PhysicalSoap => onPhysicalSoap(),
            _ => otherwise(Value)
        };

    public void Match(Action onHistoryAndPhysical,
        Action onGirpp,
        Action onBirp,
        Action onSirp,
        Action onDap,
        Action onBehavioralSoap,
        Action onPhysicalSoap,
        Action<string> otherwise)
    {
        if (this == HistoryAndPhysical) onHistoryAndPhysical();
        else if (this == Girpp) onGirpp();
        else if (this == Birp) onBirp();
        else if (this == Sirp) onSirp();
        else if (this == Dap) onDap();
        else if (this == BehavioralSoap) onBehavioralSoap();
        else if (this == PhysicalSoap) onPhysicalSoap();
        else otherwise(Value);
    }
}
