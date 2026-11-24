using System;
using System.Text.Json.Serialization;
using Airtable.Core.Enum;

namespace Airtable.Models.Enums;

/// <summary>
/// The type of the view.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Grid = new("grid");

    public static readonly Type1 Form = new("form");

    public static readonly Type1 Calendar = new("calendar");

    public static readonly Type1 Gallery = new("gallery");

    public static readonly Type1 Kanban = new("kanban");

    public static readonly Type1 Timeline = new("timeline");

    public static readonly Type1 Block = new("block");

    public TResult Match<TResult>(Func<TResult> onGrid,
        Func<TResult> onForm,
        Func<TResult> onCalendar,
        Func<TResult> onGallery,
        Func<TResult> onKanban,
        Func<TResult> onTimeline,
        Func<TResult> onBlock,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Grid => onGrid(),
            _ when this == Form => onForm(),
            _ when this == Calendar => onCalendar(),
            _ when this == Gallery => onGallery(),
            _ when this == Kanban => onKanban(),
            _ when this == Timeline => onTimeline(),
            _ when this == Block => onBlock(),
            _ => otherwise(Value)
        };

    public void Match(Action onGrid,
        Action onForm,
        Action onCalendar,
        Action onGallery,
        Action onKanban,
        Action onTimeline,
        Action onBlock,
        Action<string> otherwise)
    {
        if (this == Grid) onGrid();
        else if (this == Form) onForm();
        else if (this == Calendar) onCalendar();
        else if (this == Gallery) onGallery();
        else if (this == Kanban) onKanban();
        else if (this == Timeline) onTimeline();
        else if (this == Block) onBlock();
        else otherwise(Value);
    }
}
