using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Licensing type of the robot
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeUiPathOrchestratorJobsApi>))]
public sealed record TypeUiPathOrchestratorJobsApi : OpenStringEnum<TypeUiPathOrchestratorJobsApi>
{
    private TypeUiPathOrchestratorJobsApi(string value) : base(value)
    {
    }

    public static readonly TypeUiPathOrchestratorJobsApi Unattended = new("Unattended");

    public static readonly TypeUiPathOrchestratorJobsApi Attended = new("Attended");

    public static readonly TypeUiPathOrchestratorJobsApi NonProduction = new("NonProduction");

    public static readonly TypeUiPathOrchestratorJobsApi TestAutomation = new("TestAutomation");

    public static readonly TypeUiPathOrchestratorJobsApi RpaDeveloper = new("RpaDeveloper");

    public static readonly TypeUiPathOrchestratorJobsApi StudioX = new("StudioX");

    public static readonly TypeUiPathOrchestratorJobsApi HeadlessUnattended = new("HeadlessUnattended");

    public TResult Match<TResult>(Func<TResult> onUnattended,
        Func<TResult> onAttended,
        Func<TResult> onNonProduction,
        Func<TResult> onTestAutomation,
        Func<TResult> onRpaDeveloper,
        Func<TResult> onStudioX,
        Func<TResult> onHeadlessUnattended,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unattended => onUnattended(),
            _ when this == Attended => onAttended(),
            _ when this == NonProduction => onNonProduction(),
            _ when this == TestAutomation => onTestAutomation(),
            _ when this == RpaDeveloper => onRpaDeveloper(),
            _ when this == StudioX => onStudioX(),
            _ when this == HeadlessUnattended => onHeadlessUnattended(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnattended,
        Action onAttended,
        Action onNonProduction,
        Action onTestAutomation,
        Action onRpaDeveloper,
        Action onStudioX,
        Action onHeadlessUnattended,
        Action<string> otherwise)
    {
        if (this == Unattended) onUnattended();
        else if (this == Attended) onAttended();
        else if (this == NonProduction) onNonProduction();
        else if (this == TestAutomation) onTestAutomation();
        else if (this == RpaDeveloper) onRpaDeveloper();
        else if (this == StudioX) onStudioX();
        else if (this == HeadlessUnattended) onHeadlessUnattended();
        else otherwise(Value);
    }
}
