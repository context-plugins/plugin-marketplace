using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not applicable when migrating away from it. The current phase of the migration execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Phase>))]
public sealed record Phase : OpenStringEnum<Phase>
{
    private Phase(string value) : base(value)
    {
    }

    public static readonly Phase PhaseUnspecified = new("PHASE_UNSPECIFIED");

    public static readonly Phase Replication = new("REPLICATION");

    public static readonly Phase Cutover = new("CUTOVER");

    public TResult Match<TResult>(Func<TResult> onPhaseUnspecified,
        Func<TResult> onReplication,
        Func<TResult> onCutover,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PhaseUnspecified => onPhaseUnspecified(),
            _ when this == Replication => onReplication(),
            _ when this == Cutover => onCutover(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhaseUnspecified, Action onReplication, Action onCutover, Action<string> otherwise)
    {
        if (this == PhaseUnspecified) onPhaseUnspecified();
        else if (this == Replication) onReplication();
        else if (this == Cutover) onCutover();
        else otherwise(Value);
    }
}
