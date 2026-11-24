using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Whether this is a physical machine or a cloud robot template
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeUiPathOrchestratorMachinesApi>))]
public sealed record TypeUiPathOrchestratorMachinesApi : OpenStringEnum<TypeUiPathOrchestratorMachinesApi>
{
    private TypeUiPathOrchestratorMachinesApi(string value) : base(value)
    {
    }

    public static readonly TypeUiPathOrchestratorMachinesApi Standard = new("Standard");

    public static readonly TypeUiPathOrchestratorMachinesApi Template = new("Template");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onTemplate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Template => onTemplate(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard, Action onTemplate, Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Template) onTemplate();
        else otherwise(Value);
    }
}
