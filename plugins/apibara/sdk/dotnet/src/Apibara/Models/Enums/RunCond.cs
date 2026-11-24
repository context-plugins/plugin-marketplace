using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RunCond>))]
public sealed record RunCond : OpenStringEnum<RunCond>
{
    private RunCond(string value) : base(value)
    {
    }

    public static readonly RunCond RunDriveVerified = new("Run & Drive Verified");

    public static readonly RunCond RunsAndDrives = new("RUNS AND DRIVES");

    public static readonly RunCond EngineStartProgram = new("ENGINE START PROGRAM");

    public static readonly RunCond StationaryNoInformation = new("STATIONARY / NO INFORMATION");

    public static readonly RunCond Stationary = new("STATIONARY");

    public static readonly RunCond NoInformation = new("NO INFORMATION");

    public TResult Match<TResult>(Func<TResult> onRunDriveVerified,
        Func<TResult> onRunsAndDrives,
        Func<TResult> onEngineStartProgram,
        Func<TResult> onStationaryNoInformation,
        Func<TResult> onStationary,
        Func<TResult> onNoInformation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RunDriveVerified => onRunDriveVerified(),
            _ when this == RunsAndDrives => onRunsAndDrives(),
            _ when this == EngineStartProgram => onEngineStartProgram(),
            _ when this == StationaryNoInformation => onStationaryNoInformation(),
            _ when this == Stationary => onStationary(),
            _ when this == NoInformation => onNoInformation(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunDriveVerified,
        Action onRunsAndDrives,
        Action onEngineStartProgram,
        Action onStationaryNoInformation,
        Action onStationary,
        Action onNoInformation,
        Action<string> otherwise)
    {
        if (this == RunDriveVerified) onRunDriveVerified();
        else if (this == RunsAndDrives) onRunsAndDrives();
        else if (this == EngineStartProgram) onEngineStartProgram();
        else if (this == StationaryNoInformation) onStationaryNoInformation();
        else if (this == Stationary) onStationary();
        else if (this == NoInformation) onNoInformation();
        else otherwise(Value);
    }
}
