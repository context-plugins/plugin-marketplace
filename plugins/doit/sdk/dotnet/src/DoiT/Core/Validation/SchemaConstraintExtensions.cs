using System;
using System.Net;
using System.Net.Sockets;
using System.Text.RegularExpressions;

namespace DoiT.Core.Validation;

internal static class SchemaConstraintExtensions
{
    extension(string value)
    {
        public bool HasMinLength(int min) => CodePointCount(value) >= min;

        public bool HasMaxLength(int max) => CodePointCount(value) <= max;

        public bool MatchesPattern(string pattern) =>
            Regex.IsMatch(value, pattern, RegexOptions.None, TimeSpan.FromSeconds(1));

        public bool HasFormat(FormatKind kind) => kind switch
        {
            FormatKind.Email => IsEmail(value),
            FormatKind.Hostname => Uri.CheckHostName(value) is not UriHostNameType.Unknown,
            FormatKind.JsonPointer => IsJsonPointer(value),
            FormatKind.Ipv4 => IsIpAddress(value, AddressFamily.InterNetwork),
            FormatKind.Ipv6 => IsIpAddress(value, AddressFamily.InterNetworkV6),
            FormatKind.Uri => IsAbsoluteUri(value),
            FormatKind.UriReference => IsUri(value, UriKind.RelativeOrAbsolute),
            _ => true,
        };
    }

    extension<T>(T value) where T : struct, IComparable<T>
    {
        public bool MeetsMinimum(T min) => value.CompareTo(min) >= 0;

        public bool MeetsMaximum(T max) => value.CompareTo(max) <= 0;

        public bool MeetsExclusiveMinimum(T min) => value.CompareTo(min) > 0;

        public bool MeetsExclusiveMaximum(T max) => value.CompareTo(max) < 0;
    }

    extension(long value)
    {
        public bool IsMultipleOf(long factor) => factor > 0 && value % factor == 0;
    }

    extension(decimal value)
    {
        public bool IsMultipleOf(decimal factor) => factor > 0m && HasZeroRemainder(value, factor);
    }

    extension(decimal)
    {
        public static bool TryFrom(object? value, out decimal number)
        {
            var converted = value switch
            {
                sbyte n => n,
                byte n => n,
                short n => n,
                ushort n => n,
                int n => n,
                uint n => n,
                long n => n,
                ulong n => n,
                float n => FromFloat(n),
                double n => FromDouble(n),
                decimal n => n,
                _ => null,
            };

            number = converted ?? 0m;
            return converted.HasValue;
        }
    }

    extension(double bound)
    {
        public decimal ToDecimalBound() =>
            FromDouble(bound) ?? throw new ArgumentOutOfRangeException(nameof(bound));
    }

    private const double DecimalRangeLimit = 7.9228162514264338e28;

    private static decimal? FromDouble(double value) =>
        double.IsNaN(value) || value >= DecimalRangeLimit || value <= -DecimalRangeLimit
            ? null
            : (decimal)value;

    private static decimal? FromFloat(float value) =>
        float.IsNaN(value) || value >= DecimalRangeLimit || value <= -DecimalRangeLimit
            ? null
            : (decimal)value;

    private static bool HasZeroRemainder(decimal value, decimal factor)
    {
        try
        {
            return value % factor == 0m;
        }
        catch (OverflowException)
        {
            return false;
        }
    }

    private static bool IsEmail(string value)
    {
        var index = value.IndexOf('@');
        return index > 0 && index < value.Length - 1 && index == value.LastIndexOf('@');
    }

    private static bool IsIpAddress(string value, AddressFamily family) =>
        IPAddress.TryParse(value, out var address) && address.AddressFamily == family;

    private static bool IsUri(string value, UriKind kind) => Uri.TryCreate(value, kind, out _);

    private static bool IsAbsoluteUri(string value) =>
        Uri.TryCreate(value, UriKind.Absolute, out var uri) &&
        value.StartsWith($"{uri.Scheme}:", StringComparison.OrdinalIgnoreCase);

    private static bool IsJsonPointer(string value)
    {
        if (value is [])
            return true;
        if (value is not ['/', ..])
            return false;
        for (var i = 0; i < value.Length; i++)
        {
            if (value[i] != '~')
                continue;
            if (i + 1 >= value.Length || value[i + 1] is not ('0' or '1'))
                return false;
        }
        return true;
    }

    private static int CodePointCount(string value)
    {
        var count = 0;
        for (var i = 0; i < value.Length; i++)
        {
            if (char.IsHighSurrogate(value[i]) && i + 1 < value.Length && char.IsLowSurrogate(value[i + 1]))
                i++;
            count++;
        }
        return count;
    }
}
