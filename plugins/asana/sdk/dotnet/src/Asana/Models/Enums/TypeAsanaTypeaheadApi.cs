using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeAsanaTypeaheadApi>))]
public sealed record TypeAsanaTypeaheadApi : OpenStringEnum<TypeAsanaTypeaheadApi>
{
    private TypeAsanaTypeaheadApi(string value) : base(value)
    {
    }

    public static readonly TypeAsanaTypeaheadApi CustomField = new("custom_field");

    public static readonly TypeAsanaTypeaheadApi Portfolio = new("portfolio");

    public static readonly TypeAsanaTypeaheadApi Project = new("project");

    public static readonly TypeAsanaTypeaheadApi Tag = new("tag");

    public static readonly TypeAsanaTypeaheadApi Task = new("task");

    public static readonly TypeAsanaTypeaheadApi User = new("user");

    public TResult Match<TResult>(Func<TResult> onCustomField,
        Func<TResult> onPortfolio,
        Func<TResult> onProject,
        Func<TResult> onTag,
        Func<TResult> onTask,
        Func<TResult> onUser,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CustomField => onCustomField(),
            _ when this == Portfolio => onPortfolio(),
            _ when this == Project => onProject(),
            _ when this == Tag => onTag(),
            _ when this == Task => onTask(),
            _ when this == User => onUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomField,
        Action onPortfolio,
        Action onProject,
        Action onTag,
        Action onTask,
        Action onUser,
        Action<string> otherwise)
    {
        if (this == CustomField) onCustomField();
        else if (this == Portfolio) onPortfolio();
        else if (this == Project) onProject();
        else if (this == Tag) onTag();
        else if (this == Task) onTask();
        else if (this == User) onUser();
        else otherwise(Value);
    }
}
