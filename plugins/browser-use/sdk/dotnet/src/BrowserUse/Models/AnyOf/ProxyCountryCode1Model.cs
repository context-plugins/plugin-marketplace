using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// ISO country code to proxy the browser through. Defaults to US. Pass null to run without a proxy.
/// </summary>
[JsonConverter(typeof(ProxyCountryCode1ModelConverter))]
public record ProxyCountryCode1Model
{
    private readonly Optional<ProxyCountryCode> _proxyCountryCodeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ProxyCountryCode1Model(Optional<ProxyCountryCode> proxyCountryCodeValue, Optional<UnknownArm> unknownValue)
    {
        _proxyCountryCodeValue = proxyCountryCodeValue;
        _unknownValue = unknownValue;
    }

    public static ProxyCountryCode1Model ProxyCountryCode(ProxyCountryCode value) =>
        new(Optional<ProxyCountryCode>.Some(value), default);

    internal static ProxyCountryCode1Model Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetProxyCountryCode([NotNullWhen(true)] out ProxyCountryCode? value) =>
        _proxyCountryCodeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ProxyCountryCode1Model(ProxyCountryCode value) => ProxyCountryCode(value);

    public TResult Match<TResult>(Func<ProxyCountryCode, TResult> onProxyCountryCode,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetProxyCountryCode(out var proxyCountryCodeValue) => onProxyCountryCode(proxyCountryCodeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ProxyCountryCode1Model)} holds no value.")
        };

    public void Match(Action<ProxyCountryCode> onProxyCountryCode, Action<JsonElement> otherwise)
    {
        if (TryGetProxyCountryCode(out var proxyCountryCodeValue)) onProxyCountryCode(proxyCountryCodeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ProxyCountryCode1Model)} holds no value.");
    }
}

file sealed class ProxyCountryCode1ModelConverter : JsonConverter<ProxyCountryCode1Model>
{
    public override ProxyCountryCode1Model Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ProxyCountryCode>(root, options, out var proxyCountryCodeValue))
        {
            return ProxyCountryCode1Model.ProxyCountryCode(proxyCountryCodeValue);
        }
        return ProxyCountryCode1Model.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ProxyCountryCode1Model value, JsonSerializerOptions options)
    {
        if (value.TryGetProxyCountryCode(out var proxyCountryCodeValue))
        {
            JsonSerializer.Serialize(writer, proxyCountryCodeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ProxyCountryCode1Model)} contains no valid value to serialize.");
        }
    }
}
