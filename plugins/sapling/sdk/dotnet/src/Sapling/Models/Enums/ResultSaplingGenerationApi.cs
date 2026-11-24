using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResultSaplingGenerationApi>))]
public sealed record ResultSaplingGenerationApi : OpenStringEnum<ResultSaplingGenerationApi>
{
    private ResultSaplingGenerationApi(string value) : base(value)
    {
    }

    public static readonly ResultSaplingGenerationApi Success = new("success");

    public TResult Match<TResult>(Func<TResult> onSuccess, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else otherwise(Value);
    }
}
