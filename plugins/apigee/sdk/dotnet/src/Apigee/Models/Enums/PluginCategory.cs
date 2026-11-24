using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all plugins.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PluginCategory>))]
public sealed record PluginCategory : OpenStringEnum<PluginCategory>
{
    private PluginCategory(string value) : base(value)
    {
    }

    public static readonly PluginCategory PluginCategoryUnspecified = new("PLUGIN_CATEGORY_UNSPECIFIED");

    public static readonly PluginCategory ApiGateway = new("API_GATEWAY");

    public static readonly PluginCategory ApiProducer = new("API_PRODUCER");

    public TResult Match<TResult>(Func<TResult> onPluginCategoryUnspecified,
        Func<TResult> onApiGateway,
        Func<TResult> onApiProducer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PluginCategoryUnspecified => onPluginCategoryUnspecified(),
            _ when this == ApiGateway => onApiGateway(),
            _ when this == ApiProducer => onApiProducer(),
            _ => otherwise(Value)
        };

    public void Match(Action onPluginCategoryUnspecified,
        Action onApiGateway,
        Action onApiProducer,
        Action<string> otherwise)
    {
        if (this == PluginCategoryUnspecified) onPluginCategoryUnspecified();
        else if (this == ApiGateway) onApiGateway();
        else if (this == ApiProducer) onApiProducer();
        else otherwise(Value);
    }
}
