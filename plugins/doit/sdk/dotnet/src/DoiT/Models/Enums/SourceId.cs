using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SourceId>))]
public sealed record SourceId : OpenStringEnum<SourceId>
{
    private SourceId(string value) : base(value)
    {
    }

    public static readonly SourceId PublicApi = new("public-api");

    public TResult Match<TResult>(Func<TResult> onPublicApi, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PublicApi => onPublicApi(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublicApi, Action<string> otherwise)
    {
        if (this == PublicApi) onPublicApi();
        else otherwise(Value);
    }
}
