using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The type of context.
/// Can be one of <c>web</c>, <c>desktop</c>, <c>mobile</c>, <c>asana_support</c>, <c>asana</c>, <c>email</c>, or <c>api</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContextType>))]
public sealed record ContextType : OpenStringEnum<ContextType>
{
    private ContextType(string value) : base(value)
    {
    }

    public static readonly ContextType Web = new("web");

    public static readonly ContextType Desktop = new("desktop");

    public static readonly ContextType Mobile = new("mobile");

    public static readonly ContextType AsanaSupport = new("asana_support");

    public static readonly ContextType Asana = new("asana");

    public static readonly ContextType Email = new("email");

    public static readonly ContextType Api = new("api");

    public TResult Match<TResult>(Func<TResult> onWeb,
        Func<TResult> onDesktop,
        Func<TResult> onMobile,
        Func<TResult> onAsanaSupport,
        Func<TResult> onAsana,
        Func<TResult> onEmail,
        Func<TResult> onApi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == Desktop => onDesktop(),
            _ when this == Mobile => onMobile(),
            _ when this == AsanaSupport => onAsanaSupport(),
            _ when this == Asana => onAsana(),
            _ when this == Email => onEmail(),
            _ when this == Api => onApi(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb,
        Action onDesktop,
        Action onMobile,
        Action onAsanaSupport,
        Action onAsana,
        Action onEmail,
        Action onApi,
        Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == Desktop) onDesktop();
        else if (this == Mobile) onMobile();
        else if (this == AsanaSupport) onAsanaSupport();
        else if (this == Asana) onAsana();
        else if (this == Email) onEmail();
        else if (this == Api) onApi();
        else otherwise(Value);
    }
}
