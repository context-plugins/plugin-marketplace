using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The type of permissions granted to all users in the organization for this resource.
/// <para>
/// Allocations (single and group) always have at least <c>viewer</c> public access, so it cannot be cleared:
/// - If <c>public</c> is omitted, the stored value is kept.
/// - An empty string (<c>""</c>) is accepted for backward compatibility and is treated as <c>viewer</c>.
/// - An explicit <c>null</c> is rejected with <c>400 Bad Request</c>.
/// </para>
/// <para>
/// For Reports, Budgets, and Alerts, an omitted or <c>null</c> value sets <c>public</c> to <c>null</c> (no public access).
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Public1DoiTSharingApi>))]
public sealed record Public1DoiTSharingApi : OpenStringEnum<Public1DoiTSharingApi>
{
    private Public1DoiTSharingApi(string value) : base(value)
    {
    }

    public static readonly Public1DoiTSharingApi Editor = new("editor");

    public static readonly Public1DoiTSharingApi Viewer = new("viewer");

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
