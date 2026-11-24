using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FilterCircleCiRestApiV1BuildApi>))]
public sealed record FilterCircleCiRestApiV1BuildApi : OpenStringEnum<FilterCircleCiRestApiV1BuildApi>
{
    private FilterCircleCiRestApiV1BuildApi(string value) : base(value)
    {
    }

    public static readonly FilterCircleCiRestApiV1BuildApi Completed = new("completed");

    public static readonly FilterCircleCiRestApiV1BuildApi Successful = new("successful");

    public static readonly FilterCircleCiRestApiV1BuildApi Failed = new("failed");

    public static readonly FilterCircleCiRestApiV1BuildApi Running = new("running");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onSuccessful,
        Func<TResult> onFailed,
        Func<TResult> onRunning,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Successful => onSuccessful(),
            _ when this == Failed => onFailed(),
            _ when this == Running => onRunning(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted,
        Action onSuccessful,
        Action onFailed,
        Action onRunning,
        Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Successful) onSuccessful();
        else if (this == Failed) onFailed();
        else if (this == Running) onRunning();
        else otherwise(Value);
    }
}
