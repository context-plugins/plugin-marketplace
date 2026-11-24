using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindDeliverdDevReportsApi>))]
public sealed record KindDeliverdDevReportsApi : OpenStringEnum<KindDeliverdDevReportsApi>
{
    private KindDeliverdDevReportsApi(string value) : base(value)
    {
    }

    public static readonly KindDeliverdDevReportsApi Snapshot = new("snapshot");

    public static readonly KindDeliverdDevReportsApi Upload = new("upload");

    public TResult Match<TResult>(Func<TResult> onSnapshot, Func<TResult> onUpload, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Snapshot => onSnapshot(),
            _ when this == Upload => onUpload(),
            _ => otherwise(Value)
        };

    public void Match(Action onSnapshot, Action onUpload, Action<string> otherwise)
    {
        if (this == Snapshot) onSnapshot();
        else if (this == Upload) onUpload();
        else otherwise(Value);
    }
}
