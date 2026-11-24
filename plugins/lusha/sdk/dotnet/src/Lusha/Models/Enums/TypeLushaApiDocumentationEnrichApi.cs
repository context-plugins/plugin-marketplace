using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeLushaApiDocumentationEnrichApi>))]
public sealed record TypeLushaApiDocumentationEnrichApi : OpenStringEnum<TypeLushaApiDocumentationEnrichApi>
{
    private TypeLushaApiDocumentationEnrichApi(string value) : base(value)
    {
    }

    public static readonly TypeLushaApiDocumentationEnrichApi Work = new("work");

    public static readonly TypeLushaApiDocumentationEnrichApi Private = new("private");

    public static readonly TypeLushaApiDocumentationEnrichApi Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onWork,
        Func<TResult> onPrivate,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Work => onWork(),
            _ when this == Private => onPrivate(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onWork, Action onPrivate, Action onUnknown, Action<string> otherwise)
    {
        if (this == Work) onWork();
        else if (this == Private) onPrivate();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
