using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Component bucket the anchor lives in.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1DoiTCloudDiagramsApi>))]
public sealed record Type1DoiTCloudDiagramsApi : OpenStringEnum<Type1DoiTCloudDiagramsApi>
{
    private Type1DoiTCloudDiagramsApi(string value) : base(value)
    {
    }

    public static readonly Type1DoiTCloudDiagramsApi Node = new("node");

    public static readonly Type1DoiTCloudDiagramsApi Element = new("element");

    public static readonly Type1DoiTCloudDiagramsApi Group = new("group");

    public TResult Match<TResult>(Func<TResult> onNode,
        Func<TResult> onElement,
        Func<TResult> onGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Node => onNode(),
            _ when this == Element => onElement(),
            _ when this == Group => onGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onNode, Action onElement, Action onGroup, Action<string> otherwise)
    {
        if (this == Node) onNode();
        else if (this == Element) onElement();
        else if (this == Group) onGroup();
        else otherwise(Value);
    }
}
