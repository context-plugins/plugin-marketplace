using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of permissions users in the entire organization have for this resource
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PublicDoiTSharingApi>))]
public sealed record PublicDoiTSharingApi : OpenStringEnum<PublicDoiTSharingApi>
{
    private PublicDoiTSharingApi(string value) : base(value)
    {
    }

    public static readonly PublicDoiTSharingApi Editor = new("editor");

    public static readonly PublicDoiTSharingApi Viewer = new("viewer");

    public TResult Match<TResult>(Func<TResult> onEditor, Func<TResult> onViewer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Editor => onEditor(),
            _ when this == Viewer => onViewer(),
            _ => otherwise(Value)
        };

    public void Match(Action onEditor, Action onViewer, Action<string> otherwise)
    {
        if (this == Editor) onEditor();
        else if (this == Viewer) onViewer();
        else otherwise(Value);
    }
}
