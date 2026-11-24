using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The icon for a project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Icon>))]
public sealed record Icon : OpenStringEnum<Icon>
{
    private Icon(string value) : base(value)
    {
    }

    public static readonly Icon List = new("list");

    public static readonly Icon Board = new("board");

    public static readonly Icon Timeline = new("timeline");

    public static readonly Icon Calendar = new("calendar");

    public static readonly Icon Rocket = new("rocket");

    public static readonly Icon People = new("people");

    public static readonly Icon Graph = new("graph");

    public static readonly Icon Star = new("star");

    public static readonly Icon Bug = new("bug");

    public static readonly Icon LightBulb = new("light_bulb");

    public static readonly Icon Globe = new("globe");

    public static readonly Icon Gear = new("gear");

    public static readonly Icon Notebook = new("notebook");

    public static readonly Icon Computer = new("computer");

    public static readonly Icon Check = new("check");

    public static readonly Icon Target = new("target");

    public static readonly Icon Html = new("html");

    public static readonly Icon Megaphone = new("megaphone");

    public static readonly Icon ChatBubbles = new("chat_bubbles");

    public static readonly Icon Briefcase = new("briefcase");

    public static readonly Icon PageLayout = new("page_layout");

    public static readonly Icon MountainFlag = new("mountain_flag");

    public static readonly Icon Puzzle = new("puzzle");

    public static readonly Icon Presentation = new("presentation");

    public static readonly Icon LineAndSymbols = new("line_and_symbols");

    public static readonly Icon SpeedDial = new("speed_dial");

    public static readonly Icon Ribbon = new("ribbon");

    public static readonly Icon Shoe = new("shoe");

    public static readonly Icon ShoppingBasket = new("shopping_basket");

    public static readonly Icon Map = new("map");

    public static readonly Icon Ticket = new("ticket");

    public static readonly Icon Coins = new("coins");

    public TResult Match<TResult>(Func<TResult> onList,
        Func<TResult> onBoard,
        Func<TResult> onTimeline,
        Func<TResult> onCalendar,
        Func<TResult> onRocket,
        Func<TResult> onPeople,
        Func<TResult> onGraph,
        Func<TResult> onStar,
        Func<TResult> onBug,
        Func<TResult> onLightBulb,
        Func<TResult> onGlobe,
        Func<TResult> onGear,
        Func<TResult> onNotebook,
        Func<TResult> onComputer,
        Func<TResult> onCheck,
        Func<TResult> onTarget,
        Func<TResult> onHtml,
        Func<TResult> onMegaphone,
        Func<TResult> onChatBubbles,
        Func<TResult> onBriefcase,
        Func<TResult> onPageLayout,
        Func<TResult> onMountainFlag,
        Func<TResult> onPuzzle,
        Func<TResult> onPresentation,
        Func<TResult> onLineAndSymbols,
        Func<TResult> onSpeedDial,
        Func<TResult> onRibbon,
        Func<TResult> onShoe,
        Func<TResult> onShoppingBasket,
        Func<TResult> onMap,
        Func<TResult> onTicket,
        Func<TResult> onCoins,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == List => onList(),
            _ when this == Board => onBoard(),
            _ when this == Timeline => onTimeline(),
            _ when this == Calendar => onCalendar(),
            _ when this == Rocket => onRocket(),
            _ when this == People => onPeople(),
            _ when this == Graph => onGraph(),
            _ when this == Star => onStar(),
            _ when this == Bug => onBug(),
            _ when this == LightBulb => onLightBulb(),
            _ when this == Globe => onGlobe(),
            _ when this == Gear => onGear(),
            _ when this == Notebook => onNotebook(),
            _ when this == Computer => onComputer(),
            _ when this == Check => onCheck(),
            _ when this == Target => onTarget(),
            _ when this == Html => onHtml(),
            _ when this == Megaphone => onMegaphone(),
            _ when this == ChatBubbles => onChatBubbles(),
            _ when this == Briefcase => onBriefcase(),
            _ when this == PageLayout => onPageLayout(),
            _ when this == MountainFlag => onMountainFlag(),
            _ when this == Puzzle => onPuzzle(),
            _ when this == Presentation => onPresentation(),
            _ when this == LineAndSymbols => onLineAndSymbols(),
            _ when this == SpeedDial => onSpeedDial(),
            _ when this == Ribbon => onRibbon(),
            _ when this == Shoe => onShoe(),
            _ when this == ShoppingBasket => onShoppingBasket(),
            _ when this == Map => onMap(),
            _ when this == Ticket => onTicket(),
            _ when this == Coins => onCoins(),
            _ => otherwise(Value)
        };

    public void Match(Action onList,
        Action onBoard,
        Action onTimeline,
        Action onCalendar,
        Action onRocket,
        Action onPeople,
        Action onGraph,
        Action onStar,
        Action onBug,
        Action onLightBulb,
        Action onGlobe,
        Action onGear,
        Action onNotebook,
        Action onComputer,
        Action onCheck,
        Action onTarget,
        Action onHtml,
        Action onMegaphone,
        Action onChatBubbles,
        Action onBriefcase,
        Action onPageLayout,
        Action onMountainFlag,
        Action onPuzzle,
        Action onPresentation,
        Action onLineAndSymbols,
        Action onSpeedDial,
        Action onRibbon,
        Action onShoe,
        Action onShoppingBasket,
        Action onMap,
        Action onTicket,
        Action onCoins,
        Action<string> otherwise)
    {
        if (this == List) onList();
        else if (this == Board) onBoard();
        else if (this == Timeline) onTimeline();
        else if (this == Calendar) onCalendar();
        else if (this == Rocket) onRocket();
        else if (this == People) onPeople();
        else if (this == Graph) onGraph();
        else if (this == Star) onStar();
        else if (this == Bug) onBug();
        else if (this == LightBulb) onLightBulb();
        else if (this == Globe) onGlobe();
        else if (this == Gear) onGear();
        else if (this == Notebook) onNotebook();
        else if (this == Computer) onComputer();
        else if (this == Check) onCheck();
        else if (this == Target) onTarget();
        else if (this == Html) onHtml();
        else if (this == Megaphone) onMegaphone();
        else if (this == ChatBubbles) onChatBubbles();
        else if (this == Briefcase) onBriefcase();
        else if (this == PageLayout) onPageLayout();
        else if (this == MountainFlag) onMountainFlag();
        else if (this == Puzzle) onPuzzle();
        else if (this == Presentation) onPresentation();
        else if (this == LineAndSymbols) onLineAndSymbols();
        else if (this == SpeedDial) onSpeedDial();
        else if (this == Ribbon) onRibbon();
        else if (this == Shoe) onShoe();
        else if (this == ShoppingBasket) onShoppingBasket();
        else if (this == Map) onMap();
        else if (this == Ticket) onTicket();
        else if (this == Coins) onCoins();
        else otherwise(Value);
    }
}
