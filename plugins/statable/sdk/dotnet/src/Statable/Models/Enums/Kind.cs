using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Page = new("page");

    public static readonly Kind Event = new("event");

    public static readonly Kind Goal = new("goal");

    public static readonly Kind Scroll = new("scroll");

    public static readonly Kind EntryPage = new("entry_page");

    public static readonly Kind ExitPage = new("exit_page");

    public TResult Match<TResult>(Func<TResult> onPage,
        Func<TResult> onEvent,
        Func<TResult> onGoal,
        Func<TResult> onScroll,
        Func<TResult> onEntryPage,
        Func<TResult> onExitPage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Page => onPage(),
            _ when this == Event => onEvent(),
            _ when this == Goal => onGoal(),
            _ when this == Scroll => onScroll(),
            _ when this == EntryPage => onEntryPage(),
            _ when this == ExitPage => onExitPage(),
            _ => otherwise(Value)
        };

    public void Match(Action onPage,
        Action onEvent,
        Action onGoal,
        Action onScroll,
        Action onEntryPage,
        Action onExitPage,
        Action<string> otherwise)
    {
        if (this == Page) onPage();
        else if (this == Event) onEvent();
        else if (this == Goal) onGoal();
        else if (this == Scroll) onScroll();
        else if (this == EntryPage) onEntryPage();
        else if (this == ExitPage) onExitPage();
        else otherwise(Value);
    }
}
