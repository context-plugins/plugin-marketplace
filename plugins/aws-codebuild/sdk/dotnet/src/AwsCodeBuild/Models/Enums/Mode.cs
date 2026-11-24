using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode LocalDockerLayerCache = new("LOCAL_DOCKER_LAYER_CACHE");

    public static readonly Mode LocalSourceCache = new("LOCAL_SOURCE_CACHE");

    public static readonly Mode LocalCustomCache = new("LOCAL_CUSTOM_CACHE");

    public TResult Match<TResult>(Func<TResult> onLocalDockerLayerCache,
        Func<TResult> onLocalSourceCache,
        Func<TResult> onLocalCustomCache,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LocalDockerLayerCache => onLocalDockerLayerCache(),
            _ when this == LocalSourceCache => onLocalSourceCache(),
            _ when this == LocalCustomCache => onLocalCustomCache(),
            _ => otherwise(Value)
        };

    public void Match(Action onLocalDockerLayerCache,
        Action onLocalSourceCache,
        Action onLocalCustomCache,
        Action<string> otherwise)
    {
        if (this == LocalDockerLayerCache) onLocalDockerLayerCache();
        else if (this == LocalSourceCache) onLocalSourceCache();
        else if (this == LocalCustomCache) onLocalCustomCache();
        else otherwise(Value);
    }
}
