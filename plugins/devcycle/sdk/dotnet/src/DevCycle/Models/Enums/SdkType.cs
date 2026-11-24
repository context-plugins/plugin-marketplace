using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// DevCycle SDK type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SdkType>))]
public sealed record SdkType : OpenStringEnum<SdkType>
{
    private SdkType(string value) : base(value)
    {
    }

    public static readonly SdkType Api = new("api");

    public static readonly SdkType Server = new("server");

    public static readonly SdkType Client = new("client");

    public static readonly SdkType Mobile = new("mobile");

    public TResult Match<TResult>(Func<TResult> onApi,
        Func<TResult> onServer,
        Func<TResult> onClient,
        Func<TResult> onMobile,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Api => onApi(),
            _ when this == Server => onServer(),
            _ when this == Client => onClient(),
            _ when this == Mobile => onMobile(),
            _ => otherwise(Value)
        };

    public void Match(Action onApi, Action onServer, Action onClient, Action onMobile, Action<string> otherwise)
    {
        if (this == Api) onApi();
        else if (this == Server) onServer();
        else if (this == Client) onClient();
        else if (this == Mobile) onMobile();
        else otherwise(Value);
    }
}
