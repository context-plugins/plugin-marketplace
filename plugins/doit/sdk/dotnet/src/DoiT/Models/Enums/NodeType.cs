using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Node type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NodeType>))]
public sealed record NodeType : OpenStringEnum<NodeType>
{
    private NodeType(string value) : base(value)
    {
    }

    public static readonly NodeType AppComponent = new("app_component");

    public static readonly NodeType AppGroup = new("app_group");

    public static readonly NodeType AppLink = new("app_link");

    public static readonly NodeType Attachment = new("attachment");

    public static readonly NodeType Group = new("group");

    public static readonly NodeType Host = new("host");

    public static readonly NodeType Link = new("link");

    public static readonly NodeType Service = new("service");

    public TResult Match<TResult>(Func<TResult> onAppComponent,
        Func<TResult> onAppGroup,
        Func<TResult> onAppLink,
        Func<TResult> onAttachment,
        Func<TResult> onGroup,
        Func<TResult> onHost,
        Func<TResult> onLink,
        Func<TResult> onService,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AppComponent => onAppComponent(),
            _ when this == AppGroup => onAppGroup(),
            _ when this == AppLink => onAppLink(),
            _ when this == Attachment => onAttachment(),
            _ when this == Group => onGroup(),
            _ when this == Host => onHost(),
            _ when this == Link => onLink(),
            _ when this == Service => onService(),
            _ => otherwise(Value)
        };

    public void Match(Action onAppComponent,
        Action onAppGroup,
        Action onAppLink,
        Action onAttachment,
        Action onGroup,
        Action onHost,
        Action onLink,
        Action onService,
        Action<string> otherwise)
    {
        if (this == AppComponent) onAppComponent();
        else if (this == AppGroup) onAppGroup();
        else if (this == AppLink) onAppLink();
        else if (this == Attachment) onAttachment();
        else if (this == Group) onGroup();
        else if (this == Host) onHost();
        else if (this == Link) onLink();
        else if (this == Service) onService();
        else otherwise(Value);
    }
}
