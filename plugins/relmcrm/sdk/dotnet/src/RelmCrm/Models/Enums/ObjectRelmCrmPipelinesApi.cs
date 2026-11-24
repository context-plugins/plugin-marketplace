using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectRelmCrmPipelinesApi>))]
public sealed record ObjectRelmCrmPipelinesApi : OpenStringEnum<ObjectRelmCrmPipelinesApi>
{
    private ObjectRelmCrmPipelinesApi(string value) : base(value)
    {
    }

    public static readonly ObjectRelmCrmPipelinesApi Pipeline = new("pipeline");

    public TResult Match<TResult>(Func<TResult> onPipeline, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pipeline => onPipeline(),
            _ => otherwise(Value)
        };

    public void Match(Action onPipeline, Action<string> otherwise)
    {
        if (this == Pipeline) onPipeline();
        else otherwise(Value);
    }
}
