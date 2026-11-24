using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The data source on which the addon operates. This determines which field in the <c>config</c> oneof is used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataSource>))]
public sealed record DataSource : OpenStringEnum<DataSource>
{
    private DataSource(string value) : base(value)
    {
    }

    public static readonly DataSource DataSourceUnspecified = new("DATA_SOURCE_UNSPECIFIED");

    public static readonly DataSource PluginInstance = new("PLUGIN_INSTANCE");

    public static readonly DataSource AllData = new("ALL_DATA");

    public TResult Match<TResult>(Func<TResult> onDataSourceUnspecified,
        Func<TResult> onPluginInstance,
        Func<TResult> onAllData,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataSourceUnspecified => onDataSourceUnspecified(),
            _ when this == PluginInstance => onPluginInstance(),
            _ when this == AllData => onAllData(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataSourceUnspecified,
        Action onPluginInstance,
        Action onAllData,
        Action<string> otherwise)
    {
        if (this == DataSourceUnspecified) onDataSourceUnspecified();
        else if (this == PluginInstance) onPluginInstance();
        else if (this == AllData) onAllData();
        else otherwise(Value);
    }
}
