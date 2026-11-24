using System;
using System.Collections.Generic;
using System.Linq;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Core;

internal sealed class QueryParameterFactory
{
    private readonly IReadOnlyCollection<Param> _defaultQueryParams;

    public QueryParameterFactory(IReadOnlyCollection<Param> defaultQueryParams) =>
        _defaultQueryParams = defaultQueryParams;

    public string Serialize(IReadOnlyCollection<Param> queryParams) =>
        string.Join("&", _defaultQueryParams.Concat(queryParams)
            .SelectMany(ParameterFlattener.Flatten)
            .Select(Render));

    private static string Render(ParameterFlattener.Field field)
    {
        var delimiter = field.Delimiter is "," ? "," : Uri.EscapeDataString(field.Delimiter);
        var value = string.Join(delimiter, field.Items.Select(Uri.EscapeDataString));
        return $"{Uri.EscapeDataString(field.Key)}={value}";
    }
}
