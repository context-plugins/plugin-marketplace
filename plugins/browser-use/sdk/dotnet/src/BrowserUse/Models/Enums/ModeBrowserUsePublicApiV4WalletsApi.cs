using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModeBrowserUsePublicApiV4WalletsApi>))]
public sealed record ModeBrowserUsePublicApiV4WalletsApi : OpenStringEnum<ModeBrowserUsePublicApiV4WalletsApi>
{
    private ModeBrowserUsePublicApiV4WalletsApi(string value) : base(value)
    {
    }

    public static readonly ModeBrowserUsePublicApiV4WalletsApi Test = new("test");

    public static readonly ModeBrowserUsePublicApiV4WalletsApi Live = new("live");

    public TResult Match<TResult>(Func<TResult> onTest, Func<TResult> onLive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Test => onTest(),
            _ when this == Live => onLive(),
            _ => otherwise(Value)
        };

    public void Match(Action onTest, Action onLive, Action<string> otherwise)
    {
        if (this == Test) onTest();
        else if (this == Live) onLive();
        else otherwise(Value);
    }
}
