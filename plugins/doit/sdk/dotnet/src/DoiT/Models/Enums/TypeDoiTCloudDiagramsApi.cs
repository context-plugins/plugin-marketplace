using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Component type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDoiTCloudDiagramsApi>))]
public sealed record TypeDoiTCloudDiagramsApi : OpenStringEnum<TypeDoiTCloudDiagramsApi>
{
    private TypeDoiTCloudDiagramsApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTCloudDiagramsApi Attachment = new("attachment");

    public static readonly TypeDoiTCloudDiagramsApi Combiner = new("combiner");

    public static readonly TypeDoiTCloudDiagramsApi Element = new("element");

    public static readonly TypeDoiTCloudDiagramsApi Group = new("group");

    public static readonly TypeDoiTCloudDiagramsApi Link = new("link");

    public static readonly TypeDoiTCloudDiagramsApi Node = new("node");

    public static readonly TypeDoiTCloudDiagramsApi Note = new("note");

    public static readonly TypeDoiTCloudDiagramsApi Scheme = new("scheme");

    public static readonly TypeDoiTCloudDiagramsApi Statussheet = new("statussheet");

    public TResult Match<TResult>(Func<TResult> onAttachment,
        Func<TResult> onCombiner,
        Func<TResult> onElement,
        Func<TResult> onGroup,
        Func<TResult> onLink,
        Func<TResult> onNode,
        Func<TResult> onNote,
        Func<TResult> onScheme,
        Func<TResult> onStatussheet,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Attachment => onAttachment(),
            _ when this == Combiner => onCombiner(),
            _ when this == Element => onElement(),
            _ when this == Group => onGroup(),
            _ when this == Link => onLink(),
            _ when this == Node => onNode(),
            _ when this == Note => onNote(),
            _ when this == Scheme => onScheme(),
            _ when this == Statussheet => onStatussheet(),
            _ => otherwise(Value)
        };

    public void Match(Action onAttachment,
        Action onCombiner,
        Action onElement,
        Action onGroup,
        Action onLink,
        Action onNode,
        Action onNote,
        Action onScheme,
        Action onStatussheet,
        Action<string> otherwise)
    {
        if (this == Attachment) onAttachment();
        else if (this == Combiner) onCombiner();
        else if (this == Element) onElement();
        else if (this == Group) onGroup();
        else if (this == Link) onLink();
        else if (this == Node) onNode();
        else if (this == Note) onNote();
        else if (this == Scheme) onScheme();
        else if (this == Statussheet) onStatussheet();
        else otherwise(Value);
    }
}
