using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

/// <summary>
/// PAGINATION (default, up to ~820 results); MAP_MARKERS (fastest, up to ~500, less data per row); PAGINATION_WITH_ZOOM_IN (exhaustive recursive zoom, always runs async).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExtractionMethod>))]
public sealed record ExtractionMethod : OpenStringEnum<ExtractionMethod>
{
    private ExtractionMethod(string value) : base(value)
    {
    }

    public static readonly ExtractionMethod PaginationWithZoomIn = new("PAGINATION_WITH_ZOOM_IN");

    public static readonly ExtractionMethod Pagination = new("PAGINATION");

    public static readonly ExtractionMethod MapMarkers = new("MAP_MARKERS");

    public TResult Match<TResult>(Func<TResult> onPaginationWithZoomIn,
        Func<TResult> onPagination,
        Func<TResult> onMapMarkers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaginationWithZoomIn => onPaginationWithZoomIn(),
            _ when this == Pagination => onPagination(),
            _ when this == MapMarkers => onMapMarkers(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaginationWithZoomIn, Action onPagination, Action onMapMarkers, Action<string> otherwise)
    {
        if (this == PaginationWithZoomIn) onPaginationWithZoomIn();
        else if (this == Pagination) onPagination();
        else if (this == MapMarkers) onMapMarkers();
        else otherwise(Value);
    }
}
