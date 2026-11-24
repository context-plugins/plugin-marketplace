using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Level>))]
public sealed record Level : OpenStringEnum<Level>
{
    private Level(string value) : base(value)
    {
    }

    public static readonly Level CLevel = new("C Level");

    public static readonly Level BoardLevel = new("Board Level");

    public static readonly Level VpLevel = new("VP Level");

    public static readonly Level DirectorLevel = new("Director Level");

    public static readonly Level ManagerLevel = new("Manager Level");

    public static readonly Level StaffLevel = new("Staff Level");

    public TResult Match<TResult>(Func<TResult> onCLevel,
        Func<TResult> onBoardLevel,
        Func<TResult> onVpLevel,
        Func<TResult> onDirectorLevel,
        Func<TResult> onManagerLevel,
        Func<TResult> onStaffLevel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CLevel => onCLevel(),
            _ when this == BoardLevel => onBoardLevel(),
            _ when this == VpLevel => onVpLevel(),
            _ when this == DirectorLevel => onDirectorLevel(),
            _ when this == ManagerLevel => onManagerLevel(),
            _ when this == StaffLevel => onStaffLevel(),
            _ => otherwise(Value)
        };

    public void Match(Action onCLevel,
        Action onBoardLevel,
        Action onVpLevel,
        Action onDirectorLevel,
        Action onManagerLevel,
        Action onStaffLevel,
        Action<string> otherwise)
    {
        if (this == CLevel) onCLevel();
        else if (this == BoardLevel) onBoardLevel();
        else if (this == VpLevel) onVpLevel();
        else if (this == DirectorLevel) onDirectorLevel();
        else if (this == ManagerLevel) onManagerLevel();
        else if (this == StaffLevel) onStaffLevel();
        else otherwise(Value);
    }
}
