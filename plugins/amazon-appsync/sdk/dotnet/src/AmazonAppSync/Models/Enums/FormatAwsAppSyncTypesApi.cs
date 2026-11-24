using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The type format: SDL or JSON.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FormatAwsAppSyncTypesApi>))]
public sealed record FormatAwsAppSyncTypesApi : OpenStringEnum<FormatAwsAppSyncTypesApi>
{
    private FormatAwsAppSyncTypesApi(string value) : base(value)
    {
    }

    public static readonly FormatAwsAppSyncTypesApi Sdl = new("SDL");

    public static readonly FormatAwsAppSyncTypesApi Json = new("JSON");

    public TResult Match<TResult>(Func<TResult> onSdl, Func<TResult> onJson, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sdl => onSdl(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onSdl, Action onJson, Action<string> otherwise)
    {
        if (this == Sdl) onSdl();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
