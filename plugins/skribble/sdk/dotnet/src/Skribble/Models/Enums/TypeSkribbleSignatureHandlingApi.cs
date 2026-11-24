using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeSkribbleSignatureHandlingApi>))]
public sealed record TypeSkribbleSignatureHandlingApi : OpenStringEnum<TypeSkribbleSignatureHandlingApi>
{
    private TypeSkribbleSignatureHandlingApi(string value) : base(value)
    {
    }

    public static readonly TypeSkribbleSignatureHandlingApi Pdf = new("PDF");

    public static readonly TypeSkribbleSignatureHandlingApi Json = new("JSON");

    public static readonly TypeSkribbleSignatureHandlingApi Html = new("HTML");

    public TResult Match<TResult>(Func<TResult> onPdf,
        Func<TResult> onJson,
        Func<TResult> onHtml,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pdf => onPdf(),
            _ when this == Json => onJson(),
            _ when this == Html => onHtml(),
            _ => otherwise(Value)
        };

    public void Match(Action onPdf, Action onJson, Action onHtml, Action<string> otherwise)
    {
        if (this == Pdf) onPdf();
        else if (this == Json) onJson();
        else if (this == Html) onHtml();
        else otherwise(Value);
    }
}
