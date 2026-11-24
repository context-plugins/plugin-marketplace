using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Example>))]
public sealed record Example : OpenStringEnum<Example>
{
    private Example(string value) : base(value)
    {
    }

    public static readonly Example _1 = new("1");

    public static readonly Example Strict = new("strict");

    public static readonly Example SubjectPcs = new("subject_pcs");

    public static readonly Example Unsupported = new("unsupported");

    public static readonly Example Xml = new("xml");

    public static readonly Example List = new("list");

    public TResult Match<TResult>(Func<TResult> on_1,
        Func<TResult> onStrict,
        Func<TResult> onSubjectPcs,
        Func<TResult> onUnsupported,
        Func<TResult> onXml,
        Func<TResult> onList,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == Strict => onStrict(),
            _ when this == SubjectPcs => onSubjectPcs(),
            _ when this == Unsupported => onUnsupported(),
            _ when this == Xml => onXml(),
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1,
        Action onStrict,
        Action onSubjectPcs,
        Action onUnsupported,
        Action onXml,
        Action onList,
        Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == Strict) onStrict();
        else if (this == SubjectPcs) onSubjectPcs();
        else if (this == Unsupported) onUnsupported();
        else if (this == Xml) onXml();
        else if (this == List) onList();
        else otherwise(Value);
    }
}
