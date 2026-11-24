using System;
using System.Globalization;

namespace MrScraper.Core.Extensions;

internal static class DateTimeOffsetExtensions
{
    // Use the "r" standard format specifier (RFC1123 pattern).
    // DateTimeStyles.AssumeUniversal | AdjustToUniversal ensures parsed times are treated as UTC.
    private const string Rfc1123Format = "r";
    private const string Iso8601Format = "yyyy-MM-ddTHH:mm:ss.fff'Z'";
    private const string DateFormat = "yyyy-MM-dd";
    private const DateTimeStyles Styles = DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal;

    extension(DateTimeOffset)
    {
        public static DateTimeOffset FromRfc1123(string dateString) =>
            DateTimeOffset.ParseExact(dateString, Rfc1123Format, CultureInfo.InvariantCulture, Styles);

        // Permissive RFC 3339 / ISO 8601 parse — accepts any precision and any UTC offset.
        public static DateTimeOffset FromIso8601(string dateString) =>
            DateTimeOffset.Parse(dateString, CultureInfo.InvariantCulture, Styles);

        public static DateTimeOffset FromUnixTimestamp(string dateString) =>
            DateTimeOffset.FromUnixTimeSeconds(
                long.Parse(dateString, NumberStyles.Integer, CultureInfo.InvariantCulture));

        public static DateTimeOffset FromDate(string dateString) =>
            DateTimeOffset.ParseExact(dateString, DateFormat, CultureInfo.InvariantCulture, Styles);
    }

    extension(DateTimeOffset dateTimeOffset)
    {
        public string ToRfc1123() =>
            dateTimeOffset.ToUniversalTime().ToString(Rfc1123Format, CultureInfo.InvariantCulture);

        public string ToIso8601() =>
            dateTimeOffset.ToUniversalTime().ToString(Iso8601Format, CultureInfo.InvariantCulture);

        public string ToDate() =>
            dateTimeOffset.ToString(DateFormat, CultureInfo.InvariantCulture);
    }
}
