using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SdkTypeDevCycleManagementResultsApi>))]
public sealed record SdkTypeDevCycleManagementResultsApi : OpenStringEnum<SdkTypeDevCycleManagementResultsApi>
{
    private SdkTypeDevCycleManagementResultsApi(string value) : base(value)
    {
    }

    public static readonly SdkTypeDevCycleManagementResultsApi Client = new("client");

    public static readonly SdkTypeDevCycleManagementResultsApi Server = new("server");

    public static readonly SdkTypeDevCycleManagementResultsApi Mobile = new("mobile");

    public static readonly SdkTypeDevCycleManagementResultsApi Api = new("api");

    public TResult Match<TResult>(Func<TResult> onClient,
        Func<TResult> onServer,
        Func<TResult> onMobile,
        Func<TResult> onApi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Client => onClient(),
            _ when this == Server => onServer(),
            _ when this == Mobile => onMobile(),
            _ when this == Api => onApi(),
            _ => otherwise(Value)
        };

    public void Match(Action onClient, Action onServer, Action onMobile, Action onApi, Action<string> otherwise)
    {
        if (this == Client) onClient();
        else if (this == Server) onServer();
        else if (this == Mobile) onMobile();
        else if (this == Api) onApi();
        else otherwise(Value);
    }
}
