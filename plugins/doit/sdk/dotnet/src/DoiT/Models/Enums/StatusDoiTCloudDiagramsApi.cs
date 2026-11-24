using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Import status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTCloudDiagramsApi>))]
public sealed record StatusDoiTCloudDiagramsApi : OpenStringEnum<StatusDoiTCloudDiagramsApi>
{
    private StatusDoiTCloudDiagramsApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTCloudDiagramsApi Queued = new("queued");

    public static readonly StatusDoiTCloudDiagramsApi InProgress = new("in_progress");

    public static readonly StatusDoiTCloudDiagramsApi Success = new("success");

    public static readonly StatusDoiTCloudDiagramsApi Failure = new("failure");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onInProgress,
        Func<TResult> onSuccess,
        Func<TResult> onFailure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == InProgress => onInProgress(),
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onInProgress,
        Action onSuccess,
        Action onFailure,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == InProgress) onInProgress();
        else if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else otherwise(Value);
    }
}
