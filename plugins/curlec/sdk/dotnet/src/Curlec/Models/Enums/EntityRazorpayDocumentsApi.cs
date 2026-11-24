using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayDocumentsApi>))]
public sealed record EntityRazorpayDocumentsApi : OpenStringEnum<EntityRazorpayDocumentsApi>
{
    private EntityRazorpayDocumentsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayDocumentsApi Document = new("document");

    public TResult Match<TResult>(Func<TResult> onDocument, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Document => onDocument(),
            _ => otherwise(Value)
        };

    public void Match(Action onDocument, Action<string> otherwise)
    {
        if (this == Document) onDocument();
        else otherwise(Value);
    }
}
