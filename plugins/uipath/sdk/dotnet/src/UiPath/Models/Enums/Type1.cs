using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Type classification of the group
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Local = new("Local");

    public static readonly Type1 DirectoryGroup = new("DirectoryGroup");

    public static readonly Type1 RoboticsGroup = new("RoboticsGroup");

    public TResult Match<TResult>(Func<TResult> onLocal,
        Func<TResult> onDirectoryGroup,
        Func<TResult> onRoboticsGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Local => onLocal(),
            _ when this == DirectoryGroup => onDirectoryGroup(),
            _ when this == RoboticsGroup => onRoboticsGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onLocal, Action onDirectoryGroup, Action onRoboticsGroup, Action<string> otherwise)
    {
        if (this == Local) onLocal();
        else if (this == DirectoryGroup) onDirectoryGroup();
        else if (this == RoboticsGroup) onRoboticsGroup();
        else otherwise(Value);
    }
}
