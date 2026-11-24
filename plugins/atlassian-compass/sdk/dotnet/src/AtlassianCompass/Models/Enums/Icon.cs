using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The icon for the custom event.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Icon>))]
public sealed record Icon : OpenStringEnum<Icon>
{
    private Icon(string value) : base(value)
    {
    }

    public static readonly Icon Info = new("INFO");

    public static readonly Icon Warning = new("WARNING");

    public static readonly Icon Checkpoint = new("CHECKPOINT");

    public TResult Match<TResult>(Func<TResult> onInfo,
        Func<TResult> onWarning,
        Func<TResult> onCheckpoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Info => onInfo(),
            _ when this == Warning => onWarning(),
            _ when this == Checkpoint => onCheckpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfo, Action onWarning, Action onCheckpoint, Action<string> otherwise)
    {
        if (this == Info) onInfo();
        else if (this == Warning) onWarning();
        else if (this == Checkpoint) onCheckpoint();
        else otherwise(Value);
    }
}
