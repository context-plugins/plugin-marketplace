using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ConnectivityNetworkType>))]
public sealed record ConnectivityNetworkType : OpenStringEnum<ConnectivityNetworkType>
{
    private ConnectivityNetworkType(string value) : base(value)
    {
    }

    public static readonly ConnectivityNetworkType Cellular = new("CELLULAR");

    public static readonly ConnectivityNetworkType Ethernet = new("ETHERNET");

    public static readonly ConnectivityNetworkType Wifi = new("WIFI");

    public TResult Match<TResult>(Func<TResult> onCellular,
        Func<TResult> onEthernet,
        Func<TResult> onWifi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cellular => onCellular(),
            _ when this == Ethernet => onEthernet(),
            _ when this == Wifi => onWifi(),
            _ => otherwise(Value)
        };

    public void Match(Action onCellular, Action onEthernet, Action onWifi, Action<string> otherwise)
    {
        if (this == Cellular) onCellular();
        else if (this == Ethernet) onEthernet();
        else if (this == Wifi) onWifi();
        else otherwise(Value);
    }
}
