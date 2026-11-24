using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceType>))]
public sealed record ResourceType : OpenStringEnum<ResourceType>
{
    private ResourceType(string value) : base(value)
    {
    }

    public static readonly ResourceType CustomField = new("custom_field");

    public static readonly ResourceType Project = new("project");

    public static readonly ResourceType ProjectTemplate = new("project_template");

    public static readonly ResourceType Portfolio = new("portfolio");

    public static readonly ResourceType Tag = new("tag");

    public static readonly ResourceType Task = new("task");

    public static readonly ResourceType User = new("user");

    public TResult Match<TResult>(Func<TResult> onCustomField,
        Func<TResult> onProject,
        Func<TResult> onProjectTemplate,
        Func<TResult> onPortfolio,
        Func<TResult> onTag,
        Func<TResult> onTask,
        Func<TResult> onUser,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CustomField => onCustomField(),
            _ when this == Project => onProject(),
            _ when this == ProjectTemplate => onProjectTemplate(),
            _ when this == Portfolio => onPortfolio(),
            _ when this == Tag => onTag(),
            _ when this == Task => onTask(),
            _ when this == User => onUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomField,
        Action onProject,
        Action onProjectTemplate,
        Action onPortfolio,
        Action onTag,
        Action onTask,
        Action onUser,
        Action<string> otherwise)
    {
        if (this == CustomField) onCustomField();
        else if (this == Project) onProject();
        else if (this == ProjectTemplate) onProjectTemplate();
        else if (this == Portfolio) onPortfolio();
        else if (this == Tag) onTag();
        else if (this == Task) onTask();
        else if (this == User) onUser();
        else otherwise(Value);
    }
}
