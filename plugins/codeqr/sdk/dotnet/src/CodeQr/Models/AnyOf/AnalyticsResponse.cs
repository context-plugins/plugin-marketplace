using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CodeQr.Core.Extensions;
using CodeQr.Core.Models;

namespace CodeQr.Models.AnyOf;

[JsonConverter(typeof(AnalyticsResponseConverter))]
public record AnalyticsResponse
{
    private readonly Optional<AnalyticsCount> _analyticsCountValue;

    private readonly Optional<IReadOnlyList<AnalyticsTimeseries>> _listOfAnalyticsTimeseriesValue;

    private readonly Optional<IReadOnlyList<AnalyticsContinents>> _listOfAnalyticsContinentsValue;

    private readonly Optional<IReadOnlyList<AnalyticsCountries>> _listOfAnalyticsCountriesValue;

    private readonly Optional<IReadOnlyList<AnalyticsRegions>> _listOfAnalyticsRegionsValue;

    private readonly Optional<IReadOnlyList<AnalyticsCities>> _listOfAnalyticsCitiesValue;

    private readonly Optional<IReadOnlyList<AnalyticsDevices>> _listOfAnalyticsDevicesValue;

    private readonly Optional<IReadOnlyList<AnalyticsBrowsers>> _listOfAnalyticsBrowsersValue;

    private readonly Optional<IReadOnlyList<AnalyticsOs>> _listOfAnalyticsOsValue;

    private readonly Optional<IReadOnlyList<AnalyticsReferers>> _listOfAnalyticsReferersValue;

    private readonly Optional<IReadOnlyList<AnalyticsRefererUrls>> _listOfAnalyticsRefererUrlsValue;

    private readonly Optional<IReadOnlyList<AnalyticsTopLinks>> _listOfAnalyticsTopLinksValue;

    private readonly Optional<IReadOnlyList<AnalyticsTopUrls>> _listOfAnalyticsTopUrlsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AnalyticsResponse(Optional<AnalyticsCount> analyticsCountValue,
        Optional<IReadOnlyList<AnalyticsTimeseries>> listOfAnalyticsTimeseriesValue,
        Optional<IReadOnlyList<AnalyticsContinents>> listOfAnalyticsContinentsValue,
        Optional<IReadOnlyList<AnalyticsCountries>> listOfAnalyticsCountriesValue,
        Optional<IReadOnlyList<AnalyticsRegions>> listOfAnalyticsRegionsValue,
        Optional<IReadOnlyList<AnalyticsCities>> listOfAnalyticsCitiesValue,
        Optional<IReadOnlyList<AnalyticsDevices>> listOfAnalyticsDevicesValue,
        Optional<IReadOnlyList<AnalyticsBrowsers>> listOfAnalyticsBrowsersValue,
        Optional<IReadOnlyList<AnalyticsOs>> listOfAnalyticsOsValue,
        Optional<IReadOnlyList<AnalyticsReferers>> listOfAnalyticsReferersValue,
        Optional<IReadOnlyList<AnalyticsRefererUrls>> listOfAnalyticsRefererUrlsValue,
        Optional<IReadOnlyList<AnalyticsTopLinks>> listOfAnalyticsTopLinksValue,
        Optional<IReadOnlyList<AnalyticsTopUrls>> listOfAnalyticsTopUrlsValue,
        Optional<UnknownArm> unknownValue)
    {
        _analyticsCountValue = analyticsCountValue;
        _listOfAnalyticsTimeseriesValue = listOfAnalyticsTimeseriesValue;
        _listOfAnalyticsContinentsValue = listOfAnalyticsContinentsValue;
        _listOfAnalyticsCountriesValue = listOfAnalyticsCountriesValue;
        _listOfAnalyticsRegionsValue = listOfAnalyticsRegionsValue;
        _listOfAnalyticsCitiesValue = listOfAnalyticsCitiesValue;
        _listOfAnalyticsDevicesValue = listOfAnalyticsDevicesValue;
        _listOfAnalyticsBrowsersValue = listOfAnalyticsBrowsersValue;
        _listOfAnalyticsOsValue = listOfAnalyticsOsValue;
        _listOfAnalyticsReferersValue = listOfAnalyticsReferersValue;
        _listOfAnalyticsRefererUrlsValue = listOfAnalyticsRefererUrlsValue;
        _listOfAnalyticsTopLinksValue = listOfAnalyticsTopLinksValue;
        _listOfAnalyticsTopUrlsValue = listOfAnalyticsTopUrlsValue;
        _unknownValue = unknownValue;
    }

    public static AnalyticsResponse AnalyticsCount(AnalyticsCount value) =>
        new(
            Optional<AnalyticsCount>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsTimeseries(IReadOnlyList<AnalyticsTimeseries> value) =>
        new(
            default,
            Optional<IReadOnlyList<AnalyticsTimeseries>>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsContinents(IReadOnlyList<AnalyticsContinents> value) =>
        new(
            default,
            default,
            Optional<IReadOnlyList<AnalyticsContinents>>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsCountries(IReadOnlyList<AnalyticsCountries> value) =>
        new(
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsCountries>>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsRegions(IReadOnlyList<AnalyticsRegions> value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsRegions>>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsCities(IReadOnlyList<AnalyticsCities> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsCities>>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsDevices(IReadOnlyList<AnalyticsDevices> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsDevices>>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsBrowsers(IReadOnlyList<AnalyticsBrowsers> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsBrowsers>>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsOs(IReadOnlyList<AnalyticsOs> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsOs>>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsReferers(IReadOnlyList<AnalyticsReferers> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsReferers>>.Some(value),
            default,
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsRefererUrls(IReadOnlyList<AnalyticsRefererUrls> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsRefererUrls>>.Some(value),
            default,
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsTopLinks(IReadOnlyList<AnalyticsTopLinks> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsTopLinks>>.Some(value),
            default,
            default);

    public static AnalyticsResponse ListOfAnalyticsTopUrls(IReadOnlyList<AnalyticsTopUrls> value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<IReadOnlyList<AnalyticsTopUrls>>.Some(value),
            default);

    internal static AnalyticsResponse Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnalyticsCount([NotNullWhen(true)] out AnalyticsCount? value) =>
        _analyticsCountValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsTimeseries([NotNullWhen(true)] out IReadOnlyList<AnalyticsTimeseries>? value) =>
        _listOfAnalyticsTimeseriesValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsContinents([NotNullWhen(true)] out IReadOnlyList<AnalyticsContinents>? value) =>
        _listOfAnalyticsContinentsValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsCountries([NotNullWhen(true)] out IReadOnlyList<AnalyticsCountries>? value) =>
        _listOfAnalyticsCountriesValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsRegions([NotNullWhen(true)] out IReadOnlyList<AnalyticsRegions>? value) =>
        _listOfAnalyticsRegionsValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsCities([NotNullWhen(true)] out IReadOnlyList<AnalyticsCities>? value) =>
        _listOfAnalyticsCitiesValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsDevices([NotNullWhen(true)] out IReadOnlyList<AnalyticsDevices>? value) =>
        _listOfAnalyticsDevicesValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsBrowsers([NotNullWhen(true)] out IReadOnlyList<AnalyticsBrowsers>? value) =>
        _listOfAnalyticsBrowsersValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsOs([NotNullWhen(true)] out IReadOnlyList<AnalyticsOs>? value) =>
        _listOfAnalyticsOsValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsReferers([NotNullWhen(true)] out IReadOnlyList<AnalyticsReferers>? value) =>
        _listOfAnalyticsReferersValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsRefererUrls([NotNullWhen(true)] out IReadOnlyList<AnalyticsRefererUrls>? value) =>
        _listOfAnalyticsRefererUrlsValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsTopLinks([NotNullWhen(true)] out IReadOnlyList<AnalyticsTopLinks>? value) =>
        _listOfAnalyticsTopLinksValue.TryGetValue(out value);

    public bool TryGetListOfAnalyticsTopUrls([NotNullWhen(true)] out IReadOnlyList<AnalyticsTopUrls>? value) =>
        _listOfAnalyticsTopUrlsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AnalyticsResponse(AnalyticsCount value) => AnalyticsCount(value);

    public TResult Match<TResult>(Func<AnalyticsCount, TResult> onAnalyticsCount,
        Func<IReadOnlyList<AnalyticsTimeseries>, TResult> onListOfAnalyticsTimeseries,
        Func<IReadOnlyList<AnalyticsContinents>, TResult> onListOfAnalyticsContinents,
        Func<IReadOnlyList<AnalyticsCountries>, TResult> onListOfAnalyticsCountries,
        Func<IReadOnlyList<AnalyticsRegions>, TResult> onListOfAnalyticsRegions,
        Func<IReadOnlyList<AnalyticsCities>, TResult> onListOfAnalyticsCities,
        Func<IReadOnlyList<AnalyticsDevices>, TResult> onListOfAnalyticsDevices,
        Func<IReadOnlyList<AnalyticsBrowsers>, TResult> onListOfAnalyticsBrowsers,
        Func<IReadOnlyList<AnalyticsOs>, TResult> onListOfAnalyticsOs,
        Func<IReadOnlyList<AnalyticsReferers>, TResult> onListOfAnalyticsReferers,
        Func<IReadOnlyList<AnalyticsRefererUrls>, TResult> onListOfAnalyticsRefererUrls,
        Func<IReadOnlyList<AnalyticsTopLinks>, TResult> onListOfAnalyticsTopLinks,
        Func<IReadOnlyList<AnalyticsTopUrls>, TResult> onListOfAnalyticsTopUrls,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnalyticsCount(out var analyticsCountValue) => onAnalyticsCount(analyticsCountValue),
            _ when TryGetListOfAnalyticsTimeseries(
                out var listOfAnalyticsTimeseriesValue) => onListOfAnalyticsTimeseries(listOfAnalyticsTimeseriesValue),
            _ when TryGetListOfAnalyticsContinents(
                out var listOfAnalyticsContinentsValue) => onListOfAnalyticsContinents(listOfAnalyticsContinentsValue),
            _ when TryGetListOfAnalyticsCountries(out var listOfAnalyticsCountriesValue) => onListOfAnalyticsCountries(
                listOfAnalyticsCountriesValue),
            _ when TryGetListOfAnalyticsRegions(out var listOfAnalyticsRegionsValue) => onListOfAnalyticsRegions(
                listOfAnalyticsRegionsValue),
            _ when TryGetListOfAnalyticsCities(out var listOfAnalyticsCitiesValue) => onListOfAnalyticsCities(
                listOfAnalyticsCitiesValue),
            _ when TryGetListOfAnalyticsDevices(out var listOfAnalyticsDevicesValue) => onListOfAnalyticsDevices(
                listOfAnalyticsDevicesValue),
            _ when TryGetListOfAnalyticsBrowsers(out var listOfAnalyticsBrowsersValue) => onListOfAnalyticsBrowsers(
                listOfAnalyticsBrowsersValue),
            _ when TryGetListOfAnalyticsOs(out var listOfAnalyticsOsValue) => onListOfAnalyticsOs(
                listOfAnalyticsOsValue),
            _ when TryGetListOfAnalyticsReferers(out var listOfAnalyticsReferersValue) => onListOfAnalyticsReferers(
                listOfAnalyticsReferersValue),
            _ when TryGetListOfAnalyticsRefererUrls(
                out var listOfAnalyticsRefererUrlsValue) => onListOfAnalyticsRefererUrls(
                listOfAnalyticsRefererUrlsValue),
            _ when TryGetListOfAnalyticsTopLinks(out var listOfAnalyticsTopLinksValue) => onListOfAnalyticsTopLinks(
                listOfAnalyticsTopLinksValue),
            _ when TryGetListOfAnalyticsTopUrls(out var listOfAnalyticsTopUrlsValue) => onListOfAnalyticsTopUrls(
                listOfAnalyticsTopUrlsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AnalyticsResponse)} holds no value.")
        };

    public void Match(Action<AnalyticsCount> onAnalyticsCount,
        Action<IReadOnlyList<AnalyticsTimeseries>> onListOfAnalyticsTimeseries,
        Action<IReadOnlyList<AnalyticsContinents>> onListOfAnalyticsContinents,
        Action<IReadOnlyList<AnalyticsCountries>> onListOfAnalyticsCountries,
        Action<IReadOnlyList<AnalyticsRegions>> onListOfAnalyticsRegions,
        Action<IReadOnlyList<AnalyticsCities>> onListOfAnalyticsCities,
        Action<IReadOnlyList<AnalyticsDevices>> onListOfAnalyticsDevices,
        Action<IReadOnlyList<AnalyticsBrowsers>> onListOfAnalyticsBrowsers,
        Action<IReadOnlyList<AnalyticsOs>> onListOfAnalyticsOs,
        Action<IReadOnlyList<AnalyticsReferers>> onListOfAnalyticsReferers,
        Action<IReadOnlyList<AnalyticsRefererUrls>> onListOfAnalyticsRefererUrls,
        Action<IReadOnlyList<AnalyticsTopLinks>> onListOfAnalyticsTopLinks,
        Action<IReadOnlyList<AnalyticsTopUrls>> onListOfAnalyticsTopUrls,
        Action<JsonElement> otherwise)
    {
        if (TryGetAnalyticsCount(out var analyticsCountValue)) onAnalyticsCount(analyticsCountValue);
        else if (TryGetListOfAnalyticsTimeseries(out var listOfAnalyticsTimeseriesValue)) onListOfAnalyticsTimeseries(
            listOfAnalyticsTimeseriesValue);
        else if (TryGetListOfAnalyticsContinents(out var listOfAnalyticsContinentsValue)) onListOfAnalyticsContinents(
            listOfAnalyticsContinentsValue);
        else if (TryGetListOfAnalyticsCountries(out var listOfAnalyticsCountriesValue)) onListOfAnalyticsCountries(
            listOfAnalyticsCountriesValue);
        else if (TryGetListOfAnalyticsRegions(out var listOfAnalyticsRegionsValue)) onListOfAnalyticsRegions(
            listOfAnalyticsRegionsValue);
        else if (TryGetListOfAnalyticsCities(out var listOfAnalyticsCitiesValue)) onListOfAnalyticsCities(
            listOfAnalyticsCitiesValue);
        else if (TryGetListOfAnalyticsDevices(out var listOfAnalyticsDevicesValue)) onListOfAnalyticsDevices(
            listOfAnalyticsDevicesValue);
        else if (TryGetListOfAnalyticsBrowsers(out var listOfAnalyticsBrowsersValue)) onListOfAnalyticsBrowsers(
            listOfAnalyticsBrowsersValue);
        else if (TryGetListOfAnalyticsOs(out var listOfAnalyticsOsValue)) onListOfAnalyticsOs(listOfAnalyticsOsValue);
        else if (TryGetListOfAnalyticsReferers(out var listOfAnalyticsReferersValue)) onListOfAnalyticsReferers(
            listOfAnalyticsReferersValue);
        else if (TryGetListOfAnalyticsRefererUrls(
            out var listOfAnalyticsRefererUrlsValue)) onListOfAnalyticsRefererUrls(listOfAnalyticsRefererUrlsValue);
        else if (TryGetListOfAnalyticsTopLinks(out var listOfAnalyticsTopLinksValue)) onListOfAnalyticsTopLinks(
            listOfAnalyticsTopLinksValue);
        else if (TryGetListOfAnalyticsTopUrls(out var listOfAnalyticsTopUrlsValue)) onListOfAnalyticsTopUrls(
            listOfAnalyticsTopUrlsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AnalyticsResponse)} holds no value.");
    }
}

file sealed class AnalyticsResponseConverter : JsonConverter<AnalyticsResponse>
{
    public override AnalyticsResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AnalyticsCount>(root, options, out var analyticsCountValue))
        {
            return AnalyticsResponse.AnalyticsCount(analyticsCountValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsTimeseries>>(
            root,
            options,
            out var listOfAnalyticsTimeseriesValue))
        {
            return AnalyticsResponse.ListOfAnalyticsTimeseries(listOfAnalyticsTimeseriesValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsContinents>>(
            root,
            options,
            out var listOfAnalyticsContinentsValue))
        {
            return AnalyticsResponse.ListOfAnalyticsContinents(listOfAnalyticsContinentsValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsCountries>>(
            root,
            options,
            out var listOfAnalyticsCountriesValue))
        {
            return AnalyticsResponse.ListOfAnalyticsCountries(listOfAnalyticsCountriesValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsRegions>>(
            root,
            options,
            out var listOfAnalyticsRegionsValue))
        {
            return AnalyticsResponse.ListOfAnalyticsRegions(listOfAnalyticsRegionsValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsCities>>(
            root,
            options,
            out var listOfAnalyticsCitiesValue))
        {
            return AnalyticsResponse.ListOfAnalyticsCities(listOfAnalyticsCitiesValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsDevices>>(
            root,
            options,
            out var listOfAnalyticsDevicesValue))
        {
            return AnalyticsResponse.ListOfAnalyticsDevices(listOfAnalyticsDevicesValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsBrowsers>>(
            root,
            options,
            out var listOfAnalyticsBrowsersValue))
        {
            return AnalyticsResponse.ListOfAnalyticsBrowsers(listOfAnalyticsBrowsersValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsOs>>(root, options, out var listOfAnalyticsOsValue))
        {
            return AnalyticsResponse.ListOfAnalyticsOs(listOfAnalyticsOsValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsReferers>>(
            root,
            options,
            out var listOfAnalyticsReferersValue))
        {
            return AnalyticsResponse.ListOfAnalyticsReferers(listOfAnalyticsReferersValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsRefererUrls>>(
            root,
            options,
            out var listOfAnalyticsRefererUrlsValue))
        {
            return AnalyticsResponse.ListOfAnalyticsRefererUrls(listOfAnalyticsRefererUrlsValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsTopLinks>>(
            root,
            options,
            out var listOfAnalyticsTopLinksValue))
        {
            return AnalyticsResponse.ListOfAnalyticsTopLinks(listOfAnalyticsTopLinksValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AnalyticsTopUrls>>(
            root,
            options,
            out var listOfAnalyticsTopUrlsValue))
        {
            return AnalyticsResponse.ListOfAnalyticsTopUrls(listOfAnalyticsTopUrlsValue);
        }
        return AnalyticsResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AnalyticsResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetAnalyticsCount(out var analyticsCountValue))
        {
            JsonSerializer.Serialize(writer, analyticsCountValue, options);
        }
        else if (value.TryGetListOfAnalyticsTimeseries(out var listOfAnalyticsTimeseriesValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsTimeseriesValue, options);
        }
        else if (value.TryGetListOfAnalyticsContinents(out var listOfAnalyticsContinentsValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsContinentsValue, options);
        }
        else if (value.TryGetListOfAnalyticsCountries(out var listOfAnalyticsCountriesValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsCountriesValue, options);
        }
        else if (value.TryGetListOfAnalyticsRegions(out var listOfAnalyticsRegionsValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsRegionsValue, options);
        }
        else if (value.TryGetListOfAnalyticsCities(out var listOfAnalyticsCitiesValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsCitiesValue, options);
        }
        else if (value.TryGetListOfAnalyticsDevices(out var listOfAnalyticsDevicesValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsDevicesValue, options);
        }
        else if (value.TryGetListOfAnalyticsBrowsers(out var listOfAnalyticsBrowsersValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsBrowsersValue, options);
        }
        else if (value.TryGetListOfAnalyticsOs(out var listOfAnalyticsOsValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsOsValue, options);
        }
        else if (value.TryGetListOfAnalyticsReferers(out var listOfAnalyticsReferersValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsReferersValue, options);
        }
        else if (value.TryGetListOfAnalyticsRefererUrls(out var listOfAnalyticsRefererUrlsValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsRefererUrlsValue, options);
        }
        else if (value.TryGetListOfAnalyticsTopLinks(out var listOfAnalyticsTopLinksValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsTopLinksValue, options);
        }
        else if (value.TryGetListOfAnalyticsTopUrls(out var listOfAnalyticsTopUrlsValue))
        {
            JsonSerializer.Serialize(writer, listOfAnalyticsTopUrlsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AnalyticsResponse)} contains no valid value to serialize.");
        }
    }
}
