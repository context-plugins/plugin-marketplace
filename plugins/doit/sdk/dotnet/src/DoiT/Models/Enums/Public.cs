using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Public sharing access level for the budget.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Public>))]
public sealed record Public : OpenStringEnum<Public>
{
    private Public(string value) : base(value)
    {
    }

    public static readonly Public Owner = new("owner");

    public static readonly Public Editor = new("editor");

    public static readonly Public Viewer = new("viewer");

    public TResult Match<TResult>(Func<TResult> onOwner,
        Func<TResult> onEditor,
        Func<TResult> onViewer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == Editor => onEditor(),
            _ when this == Viewer => onViewer(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner, Action onEditor, Action onViewer, Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == Editor) onEditor();
        else if (this == Viewer) onViewer();
        else otherwise(Value);
    }
}
