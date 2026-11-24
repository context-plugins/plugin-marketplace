using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicApiPostProcessingStageStateDto>))]
public sealed record PublicApiPostProcessingStageStateDto : OpenStringEnum<PublicApiPostProcessingStageStateDto>
{
    private PublicApiPostProcessingStageStateDto(string value) : base(value)
    {
    }

    public static readonly PublicApiPostProcessingStageStateDto Ongoing = new("ongoing");

    public static readonly PublicApiPostProcessingStageStateDto Completed = new("completed");

    public static readonly PublicApiPostProcessingStageStateDto Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onOngoing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ongoing => onOngoing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onOngoing, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Ongoing) onOngoing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
