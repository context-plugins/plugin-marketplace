using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The default view (list, board, calendar, or timeline) of a project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DefaultView>))]
public sealed record DefaultView : OpenStringEnum<DefaultView>
{
    private DefaultView(string value) : base(value)
    {
    }

    public static readonly DefaultView List = new("list");

    public static readonly DefaultView Board = new("board");

    public static readonly DefaultView Calendar = new("calendar");

    public static readonly DefaultView Timeline = new("timeline");

    public TResult Match<TResult>(Func<TResult> onList,
        Func<TResult> onBoard,
        Func<TResult> onCalendar,
        Func<TResult> onTimeline,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == List => onList(),
            _ when this == Board => onBoard(),
            _ when this == Calendar => onCalendar(),
            _ when this == Timeline => onTimeline(),
            _ => otherwise(Value)
        };

    public void Match(Action onList, Action onBoard, Action onCalendar, Action onTimeline, Action<string> otherwise)
    {
        if (this == List) onList();
        else if (this == Board) onBoard();
        else if (this == Calendar) onCalendar();
        else if (this == Timeline) onTimeline();
        else otherwise(Value);
    }
}
