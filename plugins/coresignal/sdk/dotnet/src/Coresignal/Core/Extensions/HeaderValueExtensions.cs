using System;
using System.Globalization;
using System.Linq;
using System.Net.Http.Headers;

namespace Coresignal.Core.Extensions;

internal static class HeaderValueExtensions
{
    extension(HttpResponseHeaders headers)
    {
        public string? GetHeaderValue(string headerName)
        {
            if (!headers.TryGetValues(headerName, out var headerValues))
                return null;

            foreach (var headerValue in headerValues)
                if (headerValue.Trim() is { Length: > 0 } value)
                    return value;

            return null;
        }

        public T? GetHeaderValue<T>(string headerName) where T : struct, IConvertible
        {
            if (headers.GetHeaderValue(headerName) is not { } raw)
                return null;

            if (typeof(T) == typeof(bool))
                raw = raw switch { "1" => bool.TrueString, "0" => bool.FalseString, _ => raw };

            try
            {
                return (T)Convert.ChangeType(raw, typeof(T), CultureInfo.InvariantCulture);
            }
            catch (Exception ex) when (ex is FormatException or InvalidCastException or OverflowException)
            {
                return null;
            }
        }

        public string? GetLinkHeaderUrl(string headerName, string rel)
        {
            if (!headers.TryGetValues(headerName, out var headerValues))
                return null;

            foreach (var headerValue in headerValues)
                if (FindLinkTarget(headerValue, rel) is { } target)
                    return target;

            return null;
        }
    }

    private static string? FindLinkTarget(string headerValue, string rel)
    {
        var index = 0;
        while ((index = headerValue.IndexOf('<', index)) >= 0)
        {
            var targetEnd = headerValue.IndexOf('>', index + 1);
            if (targetEnd < 0)
                return null;

            var target = headerValue[(index + 1)..targetEnd];
            var parametersEnd = IndexOfUnquoted(headerValue, ',', targetEnd + 1);

            if (HasRel(headerValue[(targetEnd + 1)..parametersEnd], rel))
                return target;

            index = parametersEnd;
        }

        return null;
    }

    private static int IndexOfUnquoted(string text, char target, int start)
    {
        var inQuotes = false;
        for (var i = start; i < text.Length; i++)
        {
            if (text[i] == '"')
                inQuotes = !inQuotes;
            else if (text[i] == target && !inQuotes)
                return i;
        }

        return text.Length;
    }

    private static bool HasRel(string parameters, string rel)
    {
        var start = 0;
        while (start < parameters.Length)
        {
            var end = IndexOfUnquoted(parameters, ';', start);
            var parameter = parameters[start..end];
            start = end + 1;

            var separator = parameter.IndexOf('=');
            if (separator < 0)
                continue;

            if (!parameter[..separator].Trim().Equals("rel", StringComparison.OrdinalIgnoreCase))
                continue;

            var relTypes = parameter[(separator + 1)..].Trim().Trim('"').Split(' ');
            return relTypes.Any(relType => relType.Equals(rel, StringComparison.OrdinalIgnoreCase));
        }

        return false;
    }
}
