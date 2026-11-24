using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Type of group to create
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Local = new("Local");

    public static readonly TypeEnum RoboticsGroup = new("RoboticsGroup");

    public TResult Match<TResult>(Func<TResult> onLocal,
        Func<TResult> onRoboticsGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Local => onLocal(),
            _ when this == RoboticsGroup => onRoboticsGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onLocal, Action onRoboticsGroup, Action<string> otherwise)
    {
        if (this == Local) onLocal();
        else if (this == RoboticsGroup) onRoboticsGroup();
        else otherwise(Value);
    }
}
