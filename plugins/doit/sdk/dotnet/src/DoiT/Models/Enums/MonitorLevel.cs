using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Whether the anomaly was detected on a single SKU (<c>sku</c>) or at the level of a whole service (<c>service</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MonitorLevel>))]
public sealed record MonitorLevel : OpenStringEnum<MonitorLevel>
{
    private MonitorLevel(string value) : base(value)
    {
    }

    public static readonly MonitorLevel Service = new("service");

    public static readonly MonitorLevel Sku = new("sku");

    public TResult Match<TResult>(Func<TResult> onService, Func<TResult> onSku, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Service => onService(),
            _ when this == Sku => onSku(),
            _ => otherwise(Value)
        };

    public void Match(Action onService, Action onSku, Action<string> otherwise)
    {
        if (this == Service) onService();
        else if (this == Sku) onSku();
        else otherwise(Value);
    }
}
