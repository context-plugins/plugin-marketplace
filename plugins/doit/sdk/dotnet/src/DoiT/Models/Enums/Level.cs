using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Level>))]
public sealed record Level : OpenStringEnum<Level>
{
    private Level(string value) : base(value)
    {
    }

    public static readonly Level Organization = new("organization");

    public static readonly Level Folder = new("folder");

    public static readonly Level Project = new("project");

    public TResult Match<TResult>(Func<TResult> onOrganization,
        Func<TResult> onFolder,
        Func<TResult> onProject,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Organization => onOrganization(),
            _ when this == Folder => onFolder(),
            _ when this == Project => onProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrganization, Action onFolder, Action onProject, Action<string> otherwise)
    {
        if (this == Organization) onOrganization();
        else if (this == Folder) onFolder();
        else if (this == Project) onProject();
        else otherwise(Value);
    }
}
