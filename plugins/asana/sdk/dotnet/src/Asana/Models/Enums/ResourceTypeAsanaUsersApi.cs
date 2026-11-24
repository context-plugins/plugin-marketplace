using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceTypeAsanaUsersApi>))]
public sealed record ResourceTypeAsanaUsersApi : OpenStringEnum<ResourceTypeAsanaUsersApi>
{
    private ResourceTypeAsanaUsersApi(string value) : base(value)
    {
    }

    public static readonly ResourceTypeAsanaUsersApi Portfolio = new("portfolio");

    public static readonly ResourceTypeAsanaUsersApi Project = new("project");

    public static readonly ResourceTypeAsanaUsersApi Tag = new("tag");

    public static readonly ResourceTypeAsanaUsersApi Task = new("task");

    public static readonly ResourceTypeAsanaUsersApi User = new("user");

    public static readonly ResourceTypeAsanaUsersApi ProjectTemplate = new("project_template");

    public TResult Match<TResult>(Func<TResult> onPortfolio,
        Func<TResult> onProject,
        Func<TResult> onTag,
        Func<TResult> onTask,
        Func<TResult> onUser,
        Func<TResult> onProjectTemplate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Portfolio => onPortfolio(),
            _ when this == Project => onProject(),
            _ when this == Tag => onTag(),
            _ when this == Task => onTask(),
            _ when this == User => onUser(),
            _ when this == ProjectTemplate => onProjectTemplate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPortfolio,
        Action onProject,
        Action onTag,
        Action onTask,
        Action onUser,
        Action onProjectTemplate,
        Action<string> otherwise)
    {
        if (this == Portfolio) onPortfolio();
        else if (this == Project) onProject();
        else if (this == Tag) onTag();
        else if (this == Task) onTask();
        else if (this == User) onUser();
        else if (this == ProjectTemplate) onProjectTemplate();
        else otherwise(Value);
    }
}
