using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModeDoiTCloudFlowApi>))]
public sealed record ModeDoiTCloudFlowApi : OpenStringEnum<ModeDoiTCloudFlowApi>
{
    private ModeDoiTCloudFlowApi(string value) : base(value)
    {
    }

    public static readonly ModeDoiTCloudFlowApi Test = new("test");

    public static readonly ModeDoiTCloudFlowApi Standard = new("standard");

    public TResult Match<TResult>(Func<TResult> onTest, Func<TResult> onStandard, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Test => onTest(),
            _ when this == Standard => onStandard(),
            _ => otherwise(Value)
        };

    public void Match(Action onTest, Action onStandard, Action<string> otherwise)
    {
        if (this == Test) onTest();
        else if (this == Standard) onStandard();
        else otherwise(Value);
    }
}
